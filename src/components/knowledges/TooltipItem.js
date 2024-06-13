import React, { useState } from 'react';

const fetchWikipediaData = async (title) => {
    const response = await fetch(`https://fr.wikipedia.org/api/rest_v1/page/summary/${title}`);
    if (!response.ok) {
        throw new Error(`Error fetching data from Wikipedia for ${title}`);
    }
    const data = await response.json();
    if (!data.title || !data.extract) {
        throw new Error(`Incomplete data received for ${title}`);
    }
    return {
        title: data.title,
        extract: data.extract,
        thumbnail: data.thumbnail ? data.thumbnail.source : null,
        page_url: data.content_urls ? data.content_urls.desktop.page : `https://fr.wikipedia.org/wiki/${title}`
    };
};

const TooltipItem = ({ title, children }) => {
    const [tooltipContent, setTooltipContent] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState(null);

    const fetchTooltipData = async () => {
        try {
            const data = await fetchWikipediaData(title);
            setTooltipContent(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setTooltipContent(null);
        }
    };

    return (
        <div
            className="item"
            onMouseEnter={() => {
                fetchTooltipData();
                setIsVisible(true);
            }}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className="tooltip">
                    {error ? (
                        <div>Error: {error}</div>
                    ) : (
                        tooltipContent && (
                            <>
                                <strong>{tooltipContent.title}</strong><br />
                                {tooltipContent.thumbnail && <img src={tooltipContent.thumbnail} alt={tooltipContent.title} width="50" />}<br />
                                {tooltipContent.extract}<br />
                                <a href={tooltipContent.page_url} target="_blank" rel="noopener noreferrer">Read more</a>
                            </>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default TooltipItem;

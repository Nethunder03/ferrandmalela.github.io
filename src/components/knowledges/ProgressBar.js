import React from 'react';

const ProgressBar = (props) => {
    console.log(props);
    const { items, className, title } = props;

    return (
        <div className={className}>
            <h3>{title}</h3>
            <div className='years'>
                <span>Années d'expériences</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>

            <div>
                {items && items.map((item) => {
                    let xpYears = 2;
                    let progressBarWidth = item.xp / xpYears * 100 + '%';

                    return (
                        <div className='progress-bar' key={item.id}>
                            <li>{item.value}</li>
                            <div className='progressBar' style={{width: progressBarWidth}}></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressBar;

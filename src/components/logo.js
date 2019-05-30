import React from 'react';

import '../styles/logo.css';

class Logo extends React.Component {
    render() {


        return (
            <div className="logo">
                <svg x="0px" y="0px" viewBox="0 0 24 24">
                    <text transform="matrix(1.0572 0 0 1 4.882812e-04 14.3242)" className="logo-text">DIGITAL</text>
                    <g>
                        <g>
                            <path className="music-note" d="M5.95,14.98c0.07-0.2,0.07-0.39,0-0.57c-0.22-0.51-1.01-0.66-1.77-0.33c-1.38,0.59-0.99,1.51-0.99,1.51
                            c0.22,0.51,1.01,0.66,1.77,0.33C5.46,15.71,5.82,15.35,5.95,14.98"/>
                        </g>
                        <path className="music-note" d="M5.62,15H5V9h1v5.62C6,14.83,5.83,15,5.62,15z"/>
                        <g>
                            <path className="music-note" d="M13.17,14.98c0.07-0.2,0.07-0.39,0-0.57c-0.22-0.51-1.01-0.66-1.77-0.33c-1.38,0.59-0.99,1.51-0.99,1.51
                            c0.22,0.51,1.01,0.66,1.77,0.33C12.68,15.71,13.04,15.35,13.17,14.98"/>
                        </g>
                        <path className="music-note" d="M12.84,15h-0.62V9h1v5.62C13.22,14.83,13.05,15,12.84,15z"/>
                        <rect x="5" y="7.97" className="music-note" width="8.22" height="1.06"/>
                    </g>
                </svg>

            </div>
        )
    }
}

export default Logo;
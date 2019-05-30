import React from 'react';
import '../styles/oscillator-type.css';

class OscillatorType extends React.Component {

    oscillatorList = ["triangle", "sine", "square", "sawtooth"];

    svgs = [
        <svg className="icon"
             id="Layer_1"
             x="0px"
             y="0px"
             viewBox="0 0 24 24">
            <polyline className="icon-shape svg-active"
                      id="triangle-svg"
                      points="0.5,10.5 6.5,4.5 16.5,16.5 23.5,10.5 "/>
        </svg>,

        <svg className="icon"
             id="Layer_1"
             x="0px"
             y="0px"
             viewBox="0 0 24 24">
            <path className="icon-shape"
                  id="sine-svg"
                  d="M0.5,11.5c2.5-3.3,4.58-3.98,6-4c4.34-0.07,6.34,5.88,11,6c2.54,0.07,4.65-1.62,6-3"/>
        </svg>,
        <svg className="icon"
             id="Layer_1"
             x="0px"
             y="0px"
             viewBox="0 0 24 24">
            <polyline className="icon-shape"
                      id="square-svg"
                      points="0,14.5 1.92,14.5 1.92,8.5 6.72,8.5 6.72,14.5 11.52,14.5 11.52,8.5 16.32,8.5 16.32,14.5 21.12,14.5 21.12,8.5 24,8.5 "/>
        </svg>,

        <svg className="icon"
             id="Layer_1"
             x="0px"
             y="0px"
             viewBox="0 0 24 24">
            <polyline className="icon-shape"
                      id="sawtooth-svg"
                      points="0,12.5 8.31,6.5 8.31,12.5 16.62,6.5 16.62,12.5 24,6.5 "/>
        </svg>
    ];


    render() {
        return (
            <div className="oscillator-choice-container slide-right-animation">
                <label className="oscillator-label">Oscillator Type</label>
                <section className="oscillator-type">
                    {
                        this.oscillatorList.map((oscillator, index) => {
                            if (index === 0) {
                                return (
                                    <div className="type-icon-container"
                                         key={index}>
                                        <div className="oscillator-selections active"
                                             id={oscillator}
                                             onClick={() => {
                                                 this.props.changeOscillator(oscillator)
                                             }}>
                                            {oscillator.charAt(0).toUpperCase() + oscillator.slice(1)}
                                        </div>
                                        {this.svgs[index]}
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="type-icon-container"
                                         key={index}>
                                        <div className="oscillator-selections"
                                             id={oscillator}
                                             onClick={() => {
                                                 this.props.changeOscillator(oscillator)
                                             }}>
                                            {oscillator.charAt(0).toUpperCase() + oscillator.slice(1)}
                                        </div>
                                        {this.svgs[index]}
                                    </div>
                                );
                            }
                        })
                    }
                </section>
            </div>
        );
    }
}

export default OscillatorType;

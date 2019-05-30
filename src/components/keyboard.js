import React from 'react';
import '../styles/keyboard.css';
import WaveformAnalyser from "./waveform-analyser";

class Keyboard extends React.Component {
    whiteKeyNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'octave-up-C', 'octave-up-D', 'octave-up-E', 'octave-up-F'];
    blackKeyNotes = ['C-sharp', 'D-sharp', 'F-sharp', 'G-sharp', 'A-sharp', 'octave-up-C-sharp', 'octave-up-D-sharp'];

    whiteKeyXPosition = ['0', '63', '126', '189', '252', '315', '378', '441', '504', '567', '630'];
    blackKeyXPosition = ['42', '105', '231', '294', '357', '483', '546'];

    whiteKeyNoteValue = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];
    blackKeyNoteValue = [119, 101, 116, 121, 117, 111, 112];

    whiteKeyTextValue = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"];
    blackKeyTextValue = ['w', 'e', 't', 'y', 'u', 'o', 'p'];

    whiteTextXPosition = ['26', '90', '152', '218', '277', '341', '407', '467', '533', '595', '658'];
    blackTextXPosition = ['54.5', '119.5', '248', '308.5', '371.5', '497', '560'];

    render() {
        return (
            <div className="keyboard-container">
                <svg className="keyboard" viewBox="0 0 690 200">
                    {
                        this.whiteKeyNotes.map((value, index) => {
                            return (
                                <g key={'whiteKey' + index}>
                                    <rect className={this.whiteKeyNotes[index] + ' white-keys'}
                                          style={{
                                              animation: 'white-key-load-animation .3s ease forwards',
                                              animationDelay: `${index * 0.1}s`
                                          }}
                                          x={this.whiteKeyXPosition[index]}
                                          y="0"
                                          rx="4"
                                          onClick={() => {
                                              this.props.whiteKeyPress('.' + this.whiteKeyNotes[index]);
                                              this.props.determineNote(this.whiteKeyNoteValue[index]);
                                          }}/>
                                    <text className="white-key-label-position"
                                          style={{
                                              animation: 'white-text-load-animation .5s ease forwards',
                                              animationDelay: `${index * 0.1}s`
                                          }}
                                          x={this.whiteTextXPosition[index]}
                                          y="190">
                                        {this.whiteKeyTextValue[index]}
                                    </text>
                                </g>
                            )
                        })
                    }

                    {
                        this.blackKeyNotes.map((value, index) => {
                            return (
                                <g key={'blackKey' + index}>
                                    <rect className={this.blackKeyNotes[index] + ' black-keys'}
                                          style={{
                                              animation: 'black-key-load-animation .3s ease forwards',
                                              animationDelay: `${index * 0.1}s`
                                          }}
                                          x={this.blackKeyXPosition[index]}
                                          y="0"
                                          rx="2"
                                          onClick={() => {
                                              this.props.blackKeyPress('.' + this.blackKeyNotes[index]);
                                              this.props.determineNote(this.blackKeyNoteValue[index]);
                                          }}/>
                                    <text className="black-key-label-position"
                                          style={{
                                              animation: 'black-text-load-animation .5s ease forwards',
                                              animationDelay: `${index * 0.1}s`
                                          }}
                                          x={this.blackTextXPosition[index]}
                                          y="100">
                                        {this.blackKeyTextValue[index]}
                                    </text>
                                </g>
                            )
                        })
                    }
                </svg>

                <div className="octave-adjustment">
                    <button className="change-octave-btn" type="button" onClick={() => {
                        this.props.determineNote(122)
                    }}>- z
                    </button>
                    <button className="change-octave-btn" type="button" onClick={() => {
                        this.props.determineNote(120)
                    }}>x +
                    </button>
                </div>

                <div>
                    <WaveformAnalyser></WaveformAnalyser>
                </div>
            </div>
        );
    }

}

export default Keyboard;

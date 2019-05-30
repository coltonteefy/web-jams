import React from 'react';
import '../styles/synth-sound.css'

class SynthSounds extends React.Component {

    soundList = ["Synth", "MonoSynth", "AMSynth", "FMSynth", "MembraneSynth"];

    render() {
        return (
            <div className="sound-choice-container slide-left-animation">
                <label className="sounds-label">Sounds</label>
                <section className="sound-type">
                    {
                        this.soundList.map((sound, index) => {
                            if (index === 0) {
                                return (
                                    <div className="sound-selections active"
                                         id={sound}
                                         key={index}
                                         onClick={() => {
                                             this.props.selectSynthType(sound)
                                         }}>
                                        {sound}
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="sound-selections"
                                         id={this.soundList[index]}
                                         key={index}
                                         onClick={() => {
                                             this.props.selectSynthType(sound)
                                         }}>
                                        {sound}
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

export default SynthSounds;
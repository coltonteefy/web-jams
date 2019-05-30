import React from 'react';
import '../styles/effects-panel.css';

class EffectsPanel extends React.Component {

    effectPowerBtnToggle = (e) => {
        this.props.addRemoveEffects(e);
    };

    updateChorus = (e) => {
        this.props.updateChorus(e);
    };

    updateTremolo = (e) => {
        this.props.updateTremolo(e);
    };

    updateVibrato = (e) => {
        this.props.updateVibrato(e);
    };

    updatePhaser = (e) => {
        this.props.updatePhaser(e);
    };

    updateReverb = (e) => {
        this.props.updateReverb(e);
    };

    updateDistortion = (e) => {
        this.props.updateDistortion(e);
    };

    updateBitCrusher = (e) => {
        this.props.updateBitCrusher(e);
    };


    render() {
        return (
            <div className="effects-choice-container slide-bottom-animation">
                <label className="effects-label">Effects</label>

                <section className="effect-type">

                    <div className="effect-selections"
                         id="Chorus">
                        <i className="fas fa-power-off"
                           id="chorus-power"
                           onClick={this.effectPowerBtnToggle}>
                        </i>
                        <h4>Chorus</h4>
                        <div className="chorus-slider-container">
                            <section className="three-sliders">
                                <div className="input-value">
                                    {this.props.state.chorusValue.freq}
                                </div>
                                <input type="range"
                                       min="0.001"
                                       max="10000"
                                       value={this.props.state.chorusValue.freq}
                                       step="0.01"
                                       className="input"
                                       onChange={this.updateChorus}
                                       id="c-frequency"/>
                                <label>Frequency</label>
                            </section>
                            <section className="three-sliders">
                                <div className="input-value">
                                    {this.props.state.chorusValue.delay}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="10"
                                       value={this.props.state.chorusValue.delay}
                                       step="0.001"
                                       className="input"
                                       onChange={this.updateChorus}
                                       id="c-delay-time"/>
                                <label>Delay</label>
                            </section>
                            <section className="three-sliders">
                                <div className="input-value">
                                    {this.props.state.chorusValue.depth}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="1"
                                       value={this.props.state.chorusValue.depth}
                                       step="0.001"
                                       className="input"
                                       onChange={this.updateChorus}
                                       id="c-depth"/>
                                <label>Depth</label>
                            </section>
                        </div>
                    </div>


                    <div className="effect-selections"
                         id="Tremolo">
                        <i className="fas fa-power-off"
                           id="tremolo-power"
                           onClick={this.effectPowerBtnToggle}></i>
                        <h4>Tremolo</h4>
                        <div className="tremolo-slider-container">
                            <section className="two-sliders">
                                <div className="input-value">
                                    {this.props.state.tremoloValue.freq}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="100"
                                       value={this.props.state.tremoloValue.freq}
                                       step=".1"
                                       className="input"
                                       onChange={this.updateTremolo}
                                       id="tremolo-frequency"/>
                                <label>Frequency</label>
                            </section>
                            <section className="two-sliders">
                                <div className="input-value">
                                    {this.props.state.tremoloValue.depth}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="1"
                                       value={this.props.state.tremoloValue.depth}
                                       step="0.01"
                                       className="input"
                                       onChange={this.updateTremolo}
                                       id="tremolo-depth"/>
                                <label>Depth</label>
                            </section>
                        </div>
                    </div>


                    <div className="effect-selections"
                         id="Vibrato">
                        <i className="fas fa-power-off"
                           id="vibrato-power"
                           onClick={this.effectPowerBtnToggle}></i>
                        <h4>Vibrato</h4>
                        <div className="vibrato-slider-container">
                            <section className="two-sliders">
                                <div className="input-value">
                                    {this.props.state.vibratoValue.freq}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="10"
                                       value={this.props.state.vibratoValue.freq}
                                       step=".1"
                                       className="input"
                                       onChange={this.updateVibrato}
                                       id="vibrato-frequency"/>
                                <label>Frequency</label>
                            </section>
                            <section className="two-sliders">
                                <div className="input-value">
                                    {this.props.state.vibratoValue.depth}
                                </div>
                                <input type="range"
                                       min="1"
                                       max="10"
                                       value={this.props.state.vibratoValue.depth}
                                       step="0.1"
                                       className="input"
                                       onChange={this.updateVibrato}
                                       id="vibrato-depth"/>
                                <label>Depth</label>
                            </section>
                        </div>
                    </div>


                    <div className="effect-selections"
                         id="Phaser">
                        <i className="fas fa-power-off"
                           id="phaser-power"
                           onClick={this.effectPowerBtnToggle}></i>
                        <h4>Phaser</h4>
                        <div className="phaser-slider-container">
                            <section className="three-sliders">
                                <div className="input-value">
                                    {this.props.state.phaserValue.freq}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="100"
                                       value={this.props.state.phaserValue.freq}
                                       step=".1"
                                       className="input"
                                       onChange={this.updatePhaser}
                                       id="phaser-frequency"/>
                                <label>Frequency</label>
                            </section>
                            <section className="three-sliders">
                                <div className="input-value">
                                    {this.props.state.phaserValue.octaves}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="4"
                                       value={this.props.state.phaserValue.octaves}
                                       step="1"
                                       className="input"
                                       onChange={this.updatePhaser}
                                       id="phaser-octave"/>
                                <label>Octaves</label>
                            </section>
                            <section className="three-sliders">
                                <div className="input-value">
                                    {this.props.state.phaserValue.base}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="2000"
                                       value={this.props.state.phaserValue.base}
                                       step="1"
                                       className="input"
                                       onChange={this.updatePhaser}
                                       id="phaser-baseFrequency"/>
                                <label>Base</label>
                            </section>
                        </div>
                    </div>


                    <div className="effect-selections"
                         id="Reverb">
                        <i className="fas fa-power-off"
                           id="reverb-power"
                           onClick={this.effectPowerBtnToggle}></i>
                        <h4>Reverb</h4>
                        <div className="reverb-slider-container">
                            <section className="one-slider">
                                <div className="input-value">
                                    {this.props.state.reverbValue.roomSize}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="0.9"
                                       value={this.props.state.reverbValue.roomSize}
                                       step=".01"
                                       className="input"
                                       onChange={this.updateReverb}
                                       id="reverb-room-size"/>
                                <label>Room Size</label>
                            </section>
                        </div>
                    </div>

                    <div className="effect-selections"
                         id="Distortion">
                        <i className="fas fa-power-off"
                           id="distortion-power"
                           onClick={this.effectPowerBtnToggle}></i>
                        <h4>Distortion</h4>
                        <div className="distortion-slider-container">
                            <section className="one-slider">
                                <div className="input-value">
                                    {this.props.state.distortionValue.distortion}
                                </div>
                                <input type="range"
                                       min="0"
                                       max="100"
                                       value={this.props.state.distortionValue.distortion}
                                       step=".1"
                                       className="input"
                                       onChange={this.updateDistortion}
                                       id="distortion"/>
                                <label>Distortion</label>
                            </section>
                        </div>
                    </div>

                    <div className="effect-selections"
                         id="BitCrusher">
                        <i className="fas fa-power-off"
                           id="bitCrusher-power"
                           onClick={this.effectPowerBtnToggle}></i>
                        <h4>BitCrusher</h4>
                        <div className="bitCrusher-slider-container">
                            <section className="one-slider">
                                <div className="input-value">
                                    {this.props.state.bitCrusherValue.bit}
                                </div>
                                <input type="range"
                                       min="4"
                                       max="8"
                                       value={this.props.state.bitCrusherValue.bit}
                                       step=".001"
                                       className="input"
                                       onChange={this.updateBitCrusher}
                                       id="bitCrusher"/>
                                <label>Bit</label>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default EffectsPanel;

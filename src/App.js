import React from 'react';
import './App.css';

import Tone from 'tone';
import SynthSounds from "./components/synth-sounds";
import OscillatorType from "./components/oscillator-type";
import EffectsPanel from "./components/effects-panel";
import Keyboard from "./components/keyboard";
import Logo from "./components/logo";

class App extends React.Component {
    state = {
        synth: new Tone.Synth().toMaster(),
        synthValues: {
            oscillator: {
                type: "triangle",
                modulationFrequency: 0.2
            },
            envelope: {
                attack: 0.02,
                decay: 0.1,
                sustain: 0.2,
                release: 0.9,
            }
        },
        chorusValue: {
            freq: 1.5,
            delay: 3.5,
            depth: 0.7
        },
        tremoloValue: {
            freq: 0,
            depth: 0
        },
        vibratoValue: {
            freq: 0,
            depth: 0.5
        },
        phaserValue: {
            freq: 0.5,
            octaves: 0,
            base: 350
        },
        reverbValue: {
            roomSize: 0
        },
        distortionValue: {
            distortion: 0
        },
        bitCrusherValue: {
            bit: 4
        },
        effectsAddedList: [],
    };

    list = [];
    keyboardPosition = 4;
    soundSelected = "Synth";
    oscillatorType = "triangle";
    chorus = new Tone.Chorus(this.state.chorusValue.freq, this.state.chorusValue.delay, this.state.chorusValue.depth);
    tremolo = new Tone.Tremolo(this.state.tremoloValue.freq, this.state.tremoloValue.depth).toMaster().start();
    vibrato = new Tone.Vibrato(this.state.vibratoValue.freq, this.state.vibratoValue.depth).connect(Tone.Master);
    phaser = new Tone.Phaser(this.state.phaserValue.freq, this.state.phaserValue.octaves, this.state.phaserValue.base).connect(Tone.Master);
    reverb = new Tone.JCReverb(this.state.reverbValue.roomSize).connect(Tone.Master);
    distortion = new Tone.Distortion(this.state.distortionValue.distortion).connect(Tone.Master);
    bitCrusher = new Tone.BitCrusher(this.state.bitCrusherValue.bit).connect(Tone.Master);

    componentDidMount() {
        document.addEventListener("keypress", (e) => {
            if (e.keyCode) {
                this.determineNote(e.keyCode);
            }
        });
    };

    selectSynthType = (sound) => {
        if (this.soundSelected !== sound) {
            document.getElementById(this.soundSelected).classList.remove("active");
            document.getElementById(sound).classList.add("active");

            this.soundSelected = sound;
            this.selectSynthSound();
        }
    };

    changeOscillator = (type) => {
        if (this.oscillatorType !== type) {
            let deactivateSVG = this.oscillatorType + "-svg";
            let activeSVG = type + "-svg";

            document.getElementById(this.oscillatorType).classList.remove("active");
            document.getElementById(type).classList.add("active");

            this.oscillatorType = type;

            this.setState({
                synthValues: {
                    oscillator: {
                        type: this.oscillatorType
                    }
                }
            });

            document.getElementById(activeSVG).classList.add("svg-active");
            document.getElementById(deactivateSVG).classList.remove("svg-active");
        }
    };

    addRemoveEffects = (effect) => {
        let parentId = effect.target.parentNode.id.toString().charAt(0).toLowerCase() + effect.target.parentNode.id.toString().slice(1);

        if (this.state.effectsAddedList.includes(parentId)) {
            document.getElementById(effect.target.id).classList.remove("power-on");
            let index = this.state.effectsAddedList.indexOf(parentId);
            this.state.effectsAddedList.splice(index, 1);
            switch (parentId) {
                case "chorus":
                    this.chorus.disconnect(Tone.Master);
                    return this.chorus;
                case "tremolo":
                    this.tremolo.disconnect(Tone.Master);
                    return this.tremolo;
                case "vibrato":
                    this.vibrato.disconnect(Tone.Master);
                    return this.vibrato;
                case "phaser":
                    this.phaser.disconnect(Tone.Master);
                    return this.phaser;
                case "reverb":
                    this.reverb.disconnect(Tone.Master);
                    return this.reverb;
                case "distortion":
                    this.distortion.disconnect(Tone.Master);
                    return this.distortion;
                case "bitCrusher":
                    this.bitCrusher.disconnect(Tone.Master);
                    return this.bitCrusher;
                default:
                    // eslint-disable-next-line array-callback-return
                    return;
            }
        } else {
            document.getElementById(effect.target.id).classList.add("power-on");
            this.state.effectsAddedList.push(parentId);
        }

        this.list = this.state.effectsAddedList.map((parentId) => {
            switch (parentId) {
                case "chorus":
                    this.chorus.connect(Tone.Master);
                    return this.chorus;
                case "tremolo":
                    this.tremolo.connect(Tone.Master);
                    return this.tremolo;
                case "vibrato":
                    this.vibrato.connect(Tone.Master);
                    return this.vibrato;
                case "phaser":
                    this.phaser.connect(Tone.Master);
                    return this.phaser;
                case "reverb":
                    this.reverb.connect(Tone.Master);
                    return this.reverb;
                case "distortion":
                    this.distortion.connect(Tone.Master);
                    return this.distortion;
                case "bitCrusher":
                    this.bitCrusher.connect(Tone.Master);
                    return this.bitCrusher;
                default:
                    // eslint-disable-next-line array-callback-return
                    return;
            }
        });
    };

    updateChorus = async (e) => {
        if (e.target.id === "c-frequency") {
            this.setState({
                chorusValue: {
                    freq: parseFloat(e.target.value),
                    delay: this.state.chorusValue.delay,
                    depth: this.state.chorusValue.depth,
                }
            });

            this.chorus.frequency.value = this.state.chorusValue.freq;
        }

        if (e.target.id === "c-delay-time") {
            this.setState({
                chorusValue: {
                    freq: this.state.chorusValue.freq,
                    delay: parseFloat(e.target.value),
                    depth: this.state.chorusValue.depth,
                }
            });

            this.chorus.delayTime = this.state.chorusValue.delay;
        }

        if (e.target.id === "c-depth") {
            this.setState({
                chorusValue: {
                    freq: this.state.chorusValue.freq,
                    delay: this.state.chorusValue.delay,
                    depth: parseFloat(e.target.value),
                }
            });

            this.chorus.depth = this.state.chorusValue.depth;
        }
    };

    updateTremolo = (e) => {
        if (e.target.id === "tremolo-frequency") {
            this.setState({
                tremoloValue: {
                    freq: parseFloat(e.target.value),
                    depth: this.state.tremoloValue.depth,
                }
            });

            this.tremolo.frequency.value = this.state.tremoloValue.freq;
        }

        if (e.target.id === "tremolo-depth") {
            this.setState({
                tremoloValue: {
                    freq: this.state.tremoloValue.freq,
                    depth: parseFloat(e.target.value),
                }
            });

            this.tremolo.depth.input.value = this.state.tremoloValue.depth;
        }
    };

    updateVibrato = (e) => {
        if (e.target.id === "vibrato-frequency") {
            this.setState({
                vibratoValue: {
                    freq: parseFloat(e.target.value),
                    depth: this.state.vibratoValue.depth,
                }
            });

            this.vibrato.frequency.value = this.state.vibratoValue.freq;
        }

        if (e.target.id === "vibrato-depth") {
            this.setState({
                vibratoValue: {
                    freq: this.state.vibratoValue.freq,
                    depth: parseFloat(e.target.value),
                }
            });

            this.vibrato.depth.input.value = this.state.vibratoValue.depth;
        }
    };

    updatePhaser = (e) => {
        if (e.target.id === "phaser-frequency") {
            this.setState({
                phaserValue: {
                    freq: parseFloat(e.target.value),
                    octaves: this.state.phaserValue.octaves,
                    base: this.state.phaserValue.base,
                }
            });

            this.phaser.frequency.value = this.state.phaserValue.freq;
        }

        if (e.target.id === "phaser-octave") {
            this.setState({
                phaserValue: {
                    freq: this.state.phaserValue.freq,
                    octaves: parseFloat(e.target.value),
                    base: this.state.phaserValue.base,
                }
            });

            this.phaser.octaves = this.state.phaserValue.octaves;
        }

        if (e.target.id === "phaser-baseFrequency") {
            this.setState({
                phaserValue: {
                    freq: this.state.phaserValue.freq,
                    octaves: this.state.phaserValue.octaves,
                    base: parseFloat(e.target.value),
                }
            });

            this.phaser.baseFrequency = this.state.phaserValue.base;
        }

    };

    updateReverb = (e) => {
        this.setState({
            reverbValue: {
                roomSize: parseFloat(e.target.value),
            }
        });

        this.reverb.roomSize.input.value = this.state.reverbValue.roomSize;
    };


    updateDistortion = (e) => {
        this.setState({
            distortionValue: {
                distortion: parseFloat(e.target.value),
            }
        });

        this.distortion.distortion = this.state.distortionValue.distortion;
    };


    updateBitCrusher = (e) => {
        this.setState({
            bitCrusherValue: {
                bit: parseFloat(e.target.value),
            }
        });

        this.bitCrusher.bit = this.state.bitCrusherValue.bit;
    };

    determineNote = (note) => {
        this.selectSynthSound();

        switch (note) {
            case 122:
                this.keyboardPosition--;
                break;
            case 120:
                this.keyboardPosition++;
                break;
            case 97:
                this.state.synth.triggerAttackRelease("C" + this.keyboardPosition, "8n");
                this.whiteKeyPress(".C");
                break;
            case 115:
                this.state.synth.triggerAttackRelease("D" + this.keyboardPosition, "8n");
                this.whiteKeyPress(".D");
                break;
            case 100:
                this.state.synth.triggerAttackRelease("E" + this.keyboardPosition, "8n");
                this.whiteKeyPress(".E");
                break;
            case 102:
                this.state.synth.triggerAttackRelease("F" + this.keyboardPosition, "8n");
                this.whiteKeyPress(".F");
                break;
            case 103:
                this.state.synth.triggerAttackRelease("G" + this.keyboardPosition, "8n");
                this.whiteKeyPress(".G");
                break;
            case 104:
                this.state.synth.triggerAttackRelease("A" + this.keyboardPosition, "8n");
                this.whiteKeyPress(".A");
                break;
            case 106:
                this.state.synth.triggerAttackRelease("B" + this.keyboardPosition, "8n");
                this.whiteKeyPress(".B");
                break;
            case 107:
                this.state.synth.triggerAttackRelease("C" + (this.keyboardPosition + 1), "8n");
                this.whiteKeyPress(".octave-up-C");
                break;
            case 108:
                this.state.synth.triggerAttackRelease("D" + (this.keyboardPosition + 1), "8n");
                this.whiteKeyPress(".octave-up-D");
                break;
            case 59:
                this.state.synth.triggerAttackRelease("E" + (this.keyboardPosition + 1), "8n");
                this.whiteKeyPress(".octave-up-E");
                break;
            case 39:
                this.state.synth.triggerAttackRelease("F" + (this.keyboardPosition + 1), "8n");
                this.whiteKeyPress(".octave-up-F");
                break;
            case 119:
                this.state.synth.triggerAttackRelease("C#" + this.keyboardPosition, "8n");
                this.blackKeyPress(".C-sharp");
                break;
            case 101:
                this.state.synth.triggerAttackRelease("D#" + this.keyboardPosition, "8n");
                this.blackKeyPress(".D-sharp");
                break;
            case 116:
                this.state.synth.triggerAttackRelease("F#" + this.keyboardPosition, "8n");
                this.blackKeyPress(".F-sharp");
                break;
            case 121:
                this.state.synth.triggerAttackRelease("G#" + this.keyboardPosition, "8n");
                this.blackKeyPress(".G-sharp");
                break;
            case 117:
                this.state.synth.triggerAttackRelease("A#" + this.keyboardPosition, "8n");
                this.blackKeyPress(".A-sharp");
                break;
            case 111:
                this.state.synth.triggerAttackRelease("C#" + (this.keyboardPosition + 1), "8n");
                this.blackKeyPress(".octave-up-C-sharp");
                break;
            case 112:
                this.state.synth.triggerAttackRelease("D#" + (this.keyboardPosition + 1), "8n");
                this.blackKeyPress(".octave-up-D-sharp");
                break;
            default:
                console.log("Not a note on the keyboard!!");
        }
    };

    whiteKeyPress = (selector) => {
        document.querySelector(selector).classList.add("white-key-pressed");
        setTimeout(function () {
            document.querySelector(selector).classList.remove("white-key-pressed");
        }, 200)
    };

    blackKeyPress = (selector) => {
        document.querySelector(selector).classList.add("black-key-pressed");
        setTimeout(function () {
            document.querySelector(selector).classList.remove("black-key-pressed");
        }, 200)
    };

    selectSynthSound = () => {
        switch (this.soundSelected) {
            case "Synth":
                this.setState({
                    synth: new Tone.Synth(this.state.synthValues).chain(...this.list).toMaster()
                });
                break;
            case "MonoSynth":
                this.setState({
                    synth: new Tone.MonoSynth(this.state.synthValues).chain(...this.list).toMaster()
                });
                break;
            case "AMSynth":
                this.setState({
                    synth: new Tone.AMSynth(this.state.synthValues).chain(...this.list).toMaster()
                });
                break;
            case "FMSynth":
                this.setState({
                    synth: new Tone.FMSynth(this.state.synthValues).chain(...this.list).toMaster()
                });
                break;
            case "MembraneSynth":
                this.setState({
                    synth: new Tone.MembraneSynth(this.state.synthValues).chain(...this.list).toMaster()
                });
                break;
            default:
                this.setState({
                    synth: new Tone.Synth(this.state.synthValues).chain(...this.list).toMaster()
                });
        }
    };

    render() {
        return (
            <div className="App">
                <div className="app_logo">
                    <Logo></Logo>
                </div>
                <div className="top">
                    <div className="grouped">
                        <SynthSounds selectSynthType={this.selectSynthType}></SynthSounds>
                        <OscillatorType changeOscillator={this.changeOscillator}></OscillatorType>
                    </div>
                    <EffectsPanel addRemoveEffects={this.addRemoveEffects}
                                  state={this.state}
                                  updateChorus={this.updateChorus}
                                  updateTremolo={this.updateTremolo}
                                  updateVibrato={this.updateVibrato}
                                  updatePhaser={this.updatePhaser}
                                  updateReverb={this.updateReverb}
                                  updateDistortion={this.updateDistortion}
                                  updateBitCrusher={this.updateBitCrusher}>

                    </EffectsPanel>
                </div>
                <div className="bottom">
                    <Keyboard whiteKeyPress={this.whiteKeyPress}
                              determineNote={this.determineNote}
                              blackKeyPress={this.blackKeyPress}>
                    </Keyboard>
                </div>
            </div>
        );
    }
}

export default App;

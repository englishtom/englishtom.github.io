// react
import React, { Component, Fragment } from 'react';

import _ from 'lodash';

import {
    MouseChaseBackground,
    MouseChaseIcon
} from 'react-mousechase';

import styles from './style.scss';
import icon from './icon-play.svg';

class ReactMouseChase extends Component {

    state = {
        BackgroundState: {
            invert: true,
            friction: 0.05,
            disabled: false,
            disabledOnMouseout: true
        },
        IconState: {
            friction: 0.1,
            disabled: false
        }
    }

    setValue = (path, val) => {
        let state = Object.assign({}, this.state);

        _.set(state, path, val);

        this.setState(state);
    }

    render() {

        const {BackgroundState, IconState} = this.state;

        console.log(BackgroundState);
        return (
            <div>
                <div>
                    <h2>MouseChaseBackground</h2>

                    <form className="controls">
                        <fieldset>
                            <legend>Options</legend>
                            Invert <input type="checkbox" checked={BackgroundState.invert} onChange={e => this.setValue('BackgroundState.invert', e.target.checked)} /> <br />
                            Friction <input type="range" min="0.01" max="1" step="0.01" value={BackgroundState.friction} onChange={e => this.setValue('BackgroundState.friction', e.target.value)} /> <br />
                            Disabled <input type="checkbox" checked={BackgroundState.disabled} onChange={e => this.setValue('BackgroundState.disabled', e.target.checked)} /> <br />
                            Disabled on mouseout <input type="checkbox" checked={BackgroundState.disabledOnMouseout} onChange={e => this.setValue('BackgroundState.disabledOnMouseout', e.target.checked)} />
                        </fieldset>
                    </form>

                    <div className="overflow-hidden">
                        <MouseChaseBackground {...BackgroundState} >
                            <div className="image-cover one"></div>
                        </MouseChaseBackground>
                    </div>
                </div>
                <div>
                    <h2>MouseChaseIcon</h2>

                    <form className="controls">
                        <fieldset>
                            <legend>Options</legend>
                            Friction <input type="range" min="0.1" max="1" step="0.01" value={IconState.friction} onChange={e => this.setValue('IconState.friction', e.target.value)} /> <br />
                            Disabled <input type="checkbox" checked={IconState.disabled} onChange={e => this.setValue('IconState.disabled', e.target.checked)} /> <br />
                        </fieldset>
                    </form>

                    <MouseChaseIcon 
                        icon={icon} 
                        onClick={() => alert('You clicked the icon!')}
                        {...IconState}
                    >
                        <div className="image-cover two"></div>
                    </MouseChaseIcon>
                </div>
            </div>
        )
    }

}

export default ReactMouseChase;

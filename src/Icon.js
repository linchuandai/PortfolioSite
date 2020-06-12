import React from 'react';
import './Icon.css'

export default class Icon extends React.Component {
    render() {
        return(
            <div class="icon">
                <button class="icon-button" onClick={ this.props.onClick }>
                    <img class="icon-image" src={ this.props.icon }/>
                </button>
                <p class="icon-text">{ this.props.iconText }</p>
            </div>
        );
    }
}
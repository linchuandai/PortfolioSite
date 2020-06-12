import React from 'react';
import './Dock.css'
import Icon from './Icon.js'

import Computer from './assets/computer.png'
import Koala from './assets/koala.png'

export default class Phone extends React.Component {
    _openOldSite() {
        window.open("https://linchuandai.github.io/site",'');
    }

    _openRandomAnimalSite() {
        window.open("https://reddit.com/r/aww",'');
    }

    render() {
        return (
            <div class="dock">
                <Icon icon={ Computer } iconText={"About Me"} onClick={this._openOldSite}/>
                <Icon icon={ Koala } iconText={"Cute Animal"} onClick={this._openRandomAnimalSite}/>

            </div>
        );
    }
}
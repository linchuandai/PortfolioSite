import React from 'react';
import './Phone.css'

import Dock from './Dock.js'

export default class Phone extends React.Component {
    render() {
        return (
            <div class="iphone-x">
                <div class="screen">
                </div>
                <div class="dock-position">     
                    <Dock/>   
                </div>    
            </div>
        );
    }
}
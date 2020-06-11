import React from 'react';
import './Phone.css'

export default class Phone extends React.Component {
    render() {
        return(
            <div class="iphone">
                <div class="iphone-top">
                    <span class="camera"></span>
                    <span class="sensor"></span>
                    <span class="speaker"></span>
                </div>
                <div class="top-bar"></div>
                <div class="iphone-screen">
                    <div class="screen-text">
                        <p>This site is currently under construction.</p>
                        <a class="site-link" href="https://linchuandai.github.io/site/">Click here if you want to see my old site.</a>
                    </div>
                </div>
                <div class="buttons">
                    <span class="on-off"></span>
                    <span class="sleep"></span>
                    <span class="up"></span>
                    <span class="down"></span>
                </div>
                <div class="bottom-bar"></div>
                <div class="iphone-bottom">
                    <span></span>
                </div>
            </div>
        );
    }
}
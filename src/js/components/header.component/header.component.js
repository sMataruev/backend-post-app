'use strict';
import './header.component.scss'
import { Component } from "../../core/component";

export class HeaderComponents extends Component{
    constructor( el ) {
        super( el );
    }
    init() {
        const startBtn = this.$el.querySelector( '.top__btn' );
        console.log(startBtn);
    }
}

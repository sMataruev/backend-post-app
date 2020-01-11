'use strict';
import './navigation.component.scss';
import { Component } from "../../core/component";

export class NavigationComponent extends Component{
    constructor( el ) {
        super( el );

    }
    init() {
        const tabs = this.$el.querySelectorAll( '.menu__item' );
        console.log(tabs);
        
    }
}

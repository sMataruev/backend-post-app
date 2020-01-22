'use strict';
import './create.component.scss'
import moment from 'moment';
import { Component } from "../../core/component";
import { Form } from "../../core/form";

export class CreateComponent extends Component {
    constructor( el ) {
        super( el );
    }
    init() {
        const btnSubmit = this.$el.querySelector( '.startBtn' );
        btnSubmit.addEventListener( 'click', btnSubmitClickHandler.bind( this ) );
        this.form = new Form( this.$el, {
            'title': '',
            'fulltext': ''
        } );
    }
}
function btnSubmitClickHandler( e ) {
    e.preventDefault();



}

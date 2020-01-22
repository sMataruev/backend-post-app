'use strict';

export class Form {
    constructor( form, inputs ) {
        this.form = form;
        this.inputs = inputs;
    }

    _inputsValues() {
        const value = {};
        if ( !this.form.title.value.trim() || !this.form.fulltext.value.trim() ) {
            alert( 'not data' );
            return false
        }else {
            Object.keys( this.inputs ).forEach( inputVal => {
                value[ inputVal ] = this.form[ inputVal ].value.trim();
            } );
            return value;
        }

    }
}

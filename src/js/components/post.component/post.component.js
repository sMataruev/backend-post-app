'use strict';
import './post.component.scss';

import { Component } from "../../core/component";
import { fbService } from "../../services/fb.api.service";
import { ConvertFbService } from "../../services/convertData.fb.service";

export class PostComponent extends Component {
    constructor( el ) {
        super( el );
    }

    init() {
    
    }

    async onShow() {
        console.log( 'init post' );
        const data = await fbService.getPost();
        const convertedDatafromFb = ConvertFbService.convertData( data );

    }

}

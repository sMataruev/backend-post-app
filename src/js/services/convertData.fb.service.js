'use strict';

export class ConvertFbService {
    static convertData( data ) {
        return Object.keys( data ).map( item => {
            return {
                id: item,
                ...data[ item ]
            }
        } );
    }
}

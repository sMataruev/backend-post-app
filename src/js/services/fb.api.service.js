'use strict';

class FirebaseService {
    constructor( url ) {
        this.url = url;
    }

async createPost( post ) {
        try {
            const request = new Request( `${ this.url }/posts.json`, {
                method: 'post',
                body: JSON.stringify( post )
            } );
            const response = await fetch( request );
            const data = await response.json();
            return data;
        }catch ( e ) {
            return await Promise.reject( e );
        }
    }
    async getPost(){
        try {
            const request = new Request( `${ this.url }/posts.json`, {
                method: 'get',
            } );
            const response = await fetch( request );
            const data = await response.json();
            return data;
        }catch ( e ) {
            return await Promise.reject( e );
        }
    }
}


export const fbService = new FirebaseService( 'https://backenddb-730d3.firebaseio.com' );

'use strict';

//Styles
import './main.scss'

//Components
import { HeaderComponents } from "./js/components/header.component/header.component";
import { NavigationComponent } from "./js/components/navigation.component/navigation.component";
import { PostComponent } from "./js/components/post.component/post.component";
import { CreateComponent } from "./js/components/create.component/create.component";
import { FavoritesComponent } from "./js/components/favorites.component/favorites.component";

new HeaderComponents('.top');
const create = new CreateComponent('.create');
const post = new PostComponent('.post');
const favorites = new FavoritesComponent( '.favorites' );
const navigation = new NavigationComponent( '.menu' );

navigation.registrationTabs( [
    { name: 'post', component: post },
    { name: 'create', component: create },
    { name: 'favorites', component: favorites },
] );

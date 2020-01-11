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
const create = new CreateComponent();
const post = new PostComponent();
const favorites = new FavoritesComponent();
const navigation = new NavigationComponent( '.menu' );


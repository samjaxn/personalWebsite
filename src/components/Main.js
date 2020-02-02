import React from 'react';
import Loading from './Loading';
import Header from './Header';
import Body from './Body';
import anime from '../../node_modules/animejs/lib/anime';


export default function Main() {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}

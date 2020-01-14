import React, { Component } from 'react';
import Loading from './Loading';
import Header from './Header';
import anime from '../../node_modules/animejs/lib/anime';

export class Main extends Component {
    componentDidMount(){
        /*anime({
            targets: '.Title',
            translateY: 250,
            duration: 3000
        });*/
        return (<Loading />);
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Main

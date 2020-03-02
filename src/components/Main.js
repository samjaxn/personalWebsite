import React from 'react';
import Loading from './Loading';
import Header from './Header';
import anime from '../../node_modules/animejs/lib/anime';
import Container from '@material-ui/core/Container';

export default function Main() {
    return (
        <div className="Main">
            <Container maxWidth="xl" className="Container">
                {/* <Header /> */}
            </Container>
        </div>
    );
}

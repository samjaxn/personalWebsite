import React from 'react';
import Loading from './Loading';
import anime from '../../node_modules/animejs/lib/anime';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

export default function Main() {
    return (
        <div className="Main">
            <Container maxWidth="xl" className="Container">
                <Header />
                <Footer />
            </Container>
        </div>
    );
}

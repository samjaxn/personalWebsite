import React from 'react';
import Grid from '@material-ui/core/Grid';
import anime from '../../node_modules/animejs/lib/anime';

const Header = () => {
    return (
        <div className="Header">
            <Grid container spacing={1} justify="space-around" alignItems="center">
                <Grid item xs={8} className="Jacky">
                    <h1>JACKY</h1>
                </Grid>
                <Grid item xs={4} className="menuItems">
                    <h2>menu</h2>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
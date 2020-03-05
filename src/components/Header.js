import React from 'react';
import Grid from '@material-ui/core/Grid';
import anime from '../../node_modules/animejs/lib/anime';

const Header = () => {
    return (
        <div className="Header">
            <Grid container spacing={1} justify="space-around" alignItems="center">
                <Grid item xs={12} className="instagram">
                    {/* <h1>JACKY</h1> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
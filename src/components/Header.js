import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import anime from '../../node_modules/animejs/lib/anime';

export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item xs={8} className="Jacky">
                        <h1>JACKY JACKSON</h1>
                    </Grid>
                    <Grid item xs={4} className="menuItems">
                        <h2>work / projects / contact</h2>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Header

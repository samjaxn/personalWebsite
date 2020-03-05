import React from 'react';
import Grid from '@material-ui/core/Grid';
import anime from '../../node_modules/animejs/lib/anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faInstagramSquare  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="Footer">
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} className="instagram">
                    <a href="https://www.instagram.com/jackyjacksn" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} color="#505050" size="1x"/>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
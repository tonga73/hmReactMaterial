import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import '../index.css'

const styles = theme => ({
    container: {
        backgroundColor: '#333',
        alignText: 'right',
    },
    text: {
        color: '#f57f17',
        fontFamily: 'Cinzel',
        fontSize: '3.7em',
        letterSpacing: '5px',
    }
})

class NavBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.container} position="static">
                    <Toolbar>
                        <Typography className={classes.text} variant="title" color="inherit">
                            Hugo Mitoire
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);
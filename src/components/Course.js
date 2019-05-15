import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import '../index.css'

const styles = theme => ({
    title: {
        fontFamily: 'Cinzel Decorative',
        textAlign: 'right',
        letterSpacing: '3px',
        fontWeight: 'bold'
    },
    content: {
        fontFamily: 'Bellefair',
        fontSize: '1.1em',
        letterSpacing: '0.9px',
        textAlign: 'left'
    },
    button: {
        margin: '0 right !important'
    }
})

const Course = (props) => {
    console.log(props)
    const { classes } = props;
    return(
        <div>
            { props.course ? (
                <Card>
                    <CardMedia 
                        style={{height: 0, paddingTop: '56.25%'}}
                        image={props.course.fields.courseImage.fields.file.url}
                        title={props.course.fields.title}
                    />
                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="headline" component="h2">
                            {props.course.fields.title}
                        </Typography>
                        <Typography className={classes.content} component="p">
                            {props.course.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.button} size="small" color="primary" href={props.course.fields.url} target="_blank">
                            Go to course
                        </Button>
                    </CardActions>
                </Card>
            ) : null }
        </div>
    );
}

export default withStyles(styles)(Course);
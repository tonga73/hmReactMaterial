import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'

import Course from './Course'

const SPACE_ID = 'fw3ofdayfh8a'
const ACCESS_TOKEN = 'maVFTjjiw5JXsLmzSEzchBkitUR-qZvjfX0z4UFj4Yo'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

class CoursesList extends Component {

    state = {
        courses: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getCourses()
    }

    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({courses: response.items})
            console.log(this.state.courses)
        })
        .catch((error) => {
            console.log("Error ocurred while fetching Entries")
            console.error(error)
        })
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                { this.state.courses ? (
                    <div>
                        <TextField 
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                        />
                        <Grid container spacing={24}>
                            {this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={12} md={6} lg={4} x1={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }

}

export default withStyles(styles)(CoursesList);
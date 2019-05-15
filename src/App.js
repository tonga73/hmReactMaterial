import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import PersistentDrawerLeft from './components/PersistentDrawerLeft'

const theme = createMuiTheme();

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <PersistentDrawerLeft />
    )
  }
}

export default App;

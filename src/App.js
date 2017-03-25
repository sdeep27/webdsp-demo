import React, { Component } from 'react';
import Navbar from './Navbar'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import styled from 'styled-components';

//let ppl know if they're browser is working with WebAssembly

const Intro = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Intro>Welcome to WEBDSP homies</Intro>
      </MuiThemeProvider>
    );
  }
}

export default App;

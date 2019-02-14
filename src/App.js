import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import Page from './components/Page.js'
import './App.scss'
import 'typeface-roboto'

import Home from './components/pages/Home.js'
import Works from './components/pages/Works.js'
import Skills from './components/pages/Skills.js'
import Training from './components/pages/Training.js'
import Contact from './components/pages/Contact.js'

import data from './data/data.json'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: teal[400]
    },
    secondary: { 
      main: blueGrey[900]
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

class App extends PureComponent {

  constructor(props) {
    super(props)
    this.handlerContent = this.handlerContent.bind(this)
    this.updateLinks = this.updateLinks.bind(this)
    this.pages = [
      {
        path: '/',
        name: 'Home',
        component: Home,
        icon: 'home',
        themeColor: 'primary'
      },
      {
        path: '/works',
        name: 'Work Experiences',
        component: Works,
        icon: 'business_center',
        themeColor: 'secondary'
      },
      {
        path: '/skills',
        name: 'My Skills',
        component: Skills,
        icon: 'how_to_reg',
        themeColor: 'primary'
      },
      {
        path: '/training',
        name: 'My Training',
        component: Training,
        icon: 'fitness_center',
        themeColor: 'secondary'
      },
      {
        path: '/contact',
        name: 'Contact Me',
        component: Contact,
        icon: 'alternate_email',
        themeColor: 'primary'
      }
    ]
    this.initialPath = '/'

    this.state = {
      currentPath: this.initialPath, 
      pages: this.pages,
      lang: 'en',
      data
    }
  }

  handlerContent(currentPath) {
    this.setState({
      currentPath
    })
    this.updateLinks(currentPath)
  }

  updateLinks(currentPath) {
    const pages = this.pages.filter(page => page.path !== currentPath)
    //setTimeout(() => {
      this.setState({
        pages 
      })
    //}, 1000);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Page content={this.state.data[this.state.lang]} 
                  pages={this.state.pages} 
                  setContent={this.handlerContent} />
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object),
  initialPath: PropTypes.string,
  handlerContent: PropTypes.func,
  updateLinks: PropTypes.func
}

export default App

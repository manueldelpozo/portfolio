import React, { useState } from 'react'
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

import Alert from '@material-ui/lab/Alert'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal'
import blueGrey from '@material-ui/core/colors/blueGrey'
import red from '@material-ui/core/colors/red'

const theme = createTheme({
  palette: {
    primary: { 
      main: teal[400]
    },
    secondary: { 
      main: blueGrey[900],
      contrastText: teal[400]
    },
    text: {
      secondary: '#FFFFFF'
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
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

const pages = [
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

const initialPath = '/'

const App = () => {
  const [pagesState, setPagesState] = useState(pages)
  const [lang] = useState('en')

  const updateLinks = (currentPath = initialPath) => {
    const updatedPages = pages.filter(page => 
      page.path !== currentPath.replace(process.env.PUBLIC_URL, '')
    )
    setPagesState(updatedPages)
  }

  return (
    <ThemeProvider theme={theme}>
      <Alert severity="warning" style={{ position: 'sticky', top: 0, left: 0, zIndex: 1000, width: '100vw' }}>
          This portfolio is deprecated. A new version is under construction with latest technologies.
        </Alert>
      <div className="App">
        <Router>
          <Page content={data[lang]} 
                pages={pagesState} 
                setContent={updateLinks} />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App

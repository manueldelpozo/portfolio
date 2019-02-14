import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import Bubble from './Bubble.js'
import Grid from '@material-ui/core/Grid'

const Header = (props) => {
    const links = props.pages.map(page => 
        <Grid item xs={6} md={3} key={page.name}>
            <Link to={page.path} style={{textDecoration: 'none'}}>
                <Bubble icon={page.icon} text={page.name} themeColor={page.themeColor} />
            </Link>
        </Grid>
    )
    return (
        <header className="App-header">
            <nav>
                <Grid 
                    container 
                    spacing={16} 
                    direction="row"
                    justify="center"
                    alignItems="center">
                        {links}
                </Grid>
            </nav>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </header>
    )
}

Header.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired,
        themeColor: PropTypes.string
    })),
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Header
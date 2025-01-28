import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import Bubble from './Bubble.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const Header = (props) => {
    const links = props.pages.map(page => 
        <Grid item xs={6} sm={3} md={3} key={page.name}>
            <Link to={process.env.PUBLIC_URL + page.path} style={{textDecoration: 'none'}}>
                <Bubble icon={page.icon} text={page.name} themeColor={page.themeColor} />
            </Link>
        </Grid>
    )
    return (
        <header className="App-header">
            <nav className="App-header__nav">
                <Grid 
                    container 
                    spacing={2} 
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                        {links}
                </Grid>
            </nav>
            <Typography className="App-header__title"
                        align="center" 
                        gutterBottom
                        color="textSecondary"
                        variant="h2">
                {props.title}
            </Typography>
            <Typography align="center" 
                        gutterBottom
                        color="textSecondary"
                        variant="h5">
                {props.subtitle}
            </Typography>
            <Divider/>
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
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import CloudDownload from '@material-ui/icons/CloudDownload';

const Home = ({ body }) => (
    <Fragment>
        <p>{body}</p>
        <Button variant="contained" 
                color="default" 
                component={Link}
                to={`${process.env.PUBLIC_URL}/contact`}>
            Contact me
        </Button>
        <Button variant="contained" 
                color="default" 
                component="a"
                download="CV_Manuel_delPozo_FrontEndDeveloper"
                href={require(`./../../assets/CV_Manuel_delPozo_FrontEndDeveloper.pdf`)}>
            Resume
            <CloudDownload />
        </Button>
    </Fragment>
)

Home.propTypes = {
    body: PropTypes.any
}

export default Home
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Grid from './../Grid.js'
import MapContainer from './../MapContainer.js'

const Works = ({ body }) => (
    <Fragment>
        <Grid list={body} />
        <MapContainer places={body} />
    </Fragment>
)

Works.propTypes = {
    body: PropTypes.arrayOf(PropTypes.object)
}

export default Works
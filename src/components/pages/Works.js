import React from 'react'
import PropTypes from 'prop-types'
import Grid from './../Grid.js'

const Works = ({ body }) => (
    <Grid list={body} />
)

Works.propTypes = {
    body: PropTypes.arrayOf(PropTypes.object)
}

export default Works
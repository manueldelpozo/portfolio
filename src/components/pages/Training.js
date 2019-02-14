import React from 'react'
import PropTypes from 'prop-types'
import Grid from './../Grid.js'

const Training = ({ body }) => (
    <Grid list={body} />
)

Training.propTypes = {
    body: PropTypes.arrayOf(PropTypes.object)
}

export default Training
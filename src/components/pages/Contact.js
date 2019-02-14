import React from 'react'
import PropTypes from 'prop-types'
import Grid from './../Grid.js'

const Contact = ({ body }) => (
    <Grid list={body} />
)

Contact.propTypes = {
    body: PropTypes.arrayOf(PropTypes.object)
}

export default Contact
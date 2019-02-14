import React from 'react'
import PropTypes from 'prop-types'
import ListGrid from './../ListGrid.js'

const Skills = ({ body }) => (
    <ListGrid list={body} />
)

Skills.propTypes = {
    body: PropTypes.arrayOf(PropTypes.object)
}

export default Skills
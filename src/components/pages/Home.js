import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ body }) => (
    <p>{body}</p>
)

Home.propTypes = {
    body: PropTypes.any
}

export default Home
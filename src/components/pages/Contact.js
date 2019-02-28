import React from 'react'
import PropTypes from 'prop-types'
import ListGrid from './../ListGrid.js'
import Grid from '@material-ui/core/Grid'
import ContactForm from './../forms/ContactForm.js'

const Contact = ({ body }) => (
    <Grid container spacing={16}>
        <Grid item xs={12} sm={8} md={8} lg={6}>
            <ListGrid list={body} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={6}>
            <ContactForm />
        </Grid>
    </Grid>
)

Contact.propTypes = {
    body: PropTypes.arrayOf(PropTypes.object)
}

export default Contact
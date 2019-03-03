import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ListGrid from './../ListGrid.js'
import Grid from '@material-ui/core/Grid'
import ContactForm from './../forms/ContactForm.js'

class Contact extends PureComponent {
    constructor(props) {
        super(props)
        this.sendMessage = this.sendMessage.bind(this)
        this.contactForm = React.createRef();
        this.emailAddress = 'mdp.webdeveloper@gmail.com'
    }

    sendMessage(event) {
        event.preventDefault()
        const { companyName, typeContract, remote, comment } = this.contactForm.current.ref.current.props.values
        const subject = typeContract ? 
                        `${typeContract} ${remote ? 'Remote' : ''} Job offer ${companyName ? 'from ' + companyName : ''}` : 
                        ''
        window.open(`mailto:${this.emailAddress}?subject=${escape(subject)}&body=${escape(comment)}`, '_blank')
    }

    render() {
        return(
            <Grid container spacing={16}>
                <Grid item xs={12} sm={8} md={8} lg={6}>
                    <ListGrid list={this.props.body} />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={6}>
                    <ContactForm handleSubmit={this.sendMessage} ref={this.contactForm} />
                </Grid>
            </Grid>
        )
    }
}

Contact.propTypes = {
    body: PropTypes.arrayOf(PropTypes.object),
    sendMessage: PropTypes.func
}

export default Contact
import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Header from './Header.js'
import Main from './Main.js'
import Grid from '@material-ui/core/Grid'

class Page extends PureComponent {
    constructor(props) {
        super(props)
        this.pagesBeforeMount = props.pages

        this.props.history.listen((location, action) => {
            //console.log(action, location.pathname, location, process.env.PUBLIC_URL)
            this.props.setContent(location.pathname.replace(process.env.PUBLIC_URL, ''))
        })
    }

    componentWillUnmount() {
        this.props.history.unlisten()
    }

    componentDidMount() {
        this.props.setContent(this.props.location.pathname)
    }

    render() {
        const content = this.props.content[this.props.location.pathname.replace(process.env.PUBLIC_URL, '')]
        return (
            <Fragment>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={10} sm={8} md={6}>
                        <Header title={content.header.title} 
                                subtitle={content.header.subtitle}
                                pages={this.props.pages} />
                        <Main   body={content.body} 
                                pages={this.pagesBeforeMount} />
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

Page.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object),
    pagesBeforeMount: PropTypes.arrayOf(PropTypes.object),
    setContent: PropTypes.func
}

export default withRouter(Page)

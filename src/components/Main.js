import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Scene from './Scene.js'

const Main = (props) => {
    const routes = props.pages.map(page => 
        <Route exact path={page.path} key={page.name} render={ () => (
            <Fragment>
                <page.component body={props.body} />
                <Scene color={page.themeColor} zoomIn={true} />
            </Fragment>
        )} />
    )
    
    return (
        <main>
            <Switch>
                {routes}
                <Route render={ () => <h1>404 Error</h1> } />
            </Switch>
        </main>
    )
}

Main.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired
    })),
    body: PropTypes.any
}

export default Main
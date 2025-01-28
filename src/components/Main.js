import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Scene from './Scene.js'

const Main = ({ body, pages }) => (console.log('Main', body, pages),
    <main>
        <Switch>
            {body && pages.map(({ path, name, component: PageComponent, themeColor }) => 
                <Route 
                    exact 
                    path={process.env.PUBLIC_URL + path} 
                    key={name} 
                    render={() => (
                        <Fragment>
                            <PageComponent body={body} />
                            <Scene color={themeColor} zoomIn={true} />
                        </Fragment>
                    )} 
                />
            )}
            {/* <Route render={() => <h1>404 Error</h1>} /> */}
        </Switch>
    </main>
)

export default Main
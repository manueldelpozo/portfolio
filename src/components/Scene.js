import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'

let styles = theme => ({
    primary: {
        backgroundColor: theme.palette.primary.main
    },
    secondary: {
        backgroundColor: theme.palette.secondary.main
    }
})

class Scene extends PureComponent {
    render() {
        const { classes, theme, color, zoomIn } = this.props
        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
        }

        return (
            <Zoom
                in={zoomIn}
                timeout={transitionDuration}
                style={{transitionDelay: `${transitionDuration.exit}ms`}}
                unmountOnExit>
                <div 
                    className={`
                        ${classes[color]}
                        App-scene`}>
                </div>
            </Zoom>
        )
    }
}

Scene.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired
}

export default withStyles(styles, { withTheme: true })(Scene)
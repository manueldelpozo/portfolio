import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
    root: {
        position: 'relative',
        width: 130,
        minHeight: 130, 
        transition: '.5s'
    },
    elevation0: {
        boxShadow: theme.shadows[0],
        width: 120,
        minHeight: 120
    },
    elevation10: {
        boxShadow: theme.shadows[10],
        width: 130,
        minHeight: 130
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
    }
})

class Bubble extends PureComponent {
    constructor(props) {
        super(props)
        this.getDownElevation = this.getDownElevation.bind(this)
        this.getUpElevation = this.getUpElevation.bind(this)
        this.initialElevation = 10
        this.state = {
            isElevated: true
        }
    }

    getDownElevation(e, val) {
        this.setState({ isElevated: false })
    }

    getUpElevation() {
        this.setState({ isElevated: true })
    }

    render() {
        const { classes, theme, text, icon, themeColor } = this.props
        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
        }

        //console.log(theme.shadows)

        return (          
            <Zoom
                in={true}
                timeout={transitionDuration}
                style={{transitionDelay: `${transitionDuration.exit}ms`}}
                unmountOnExit>
                <Fab 
                    className={`
                        ${classes.root} 
                        ${this.state.isElevated ? classes.elevation10 : classes.elevation0}
                        ${this.state.isExpanded ? classes.expanded : null}
                        App-header__bubble
                    `} 
                    classes={{
                        root: classes.root, // class name, e.g. `classes-nesting-root-x`
                        label: classes.label, // class name, e.g. `classes-nesting-label-x`
                    }}
                    color={themeColor}
                    onMouseOver={this.getDownElevation}
                    onMouseOut={this.getUpElevation}>
                    <Icon fontSize="large">{icon}</Icon>
                    <span>{text}</span>
                </Fab>
            </Zoom>
        )
    }
}

Bubble.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    themeColor: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(Bubble)
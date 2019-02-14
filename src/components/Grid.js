import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

const Grid = (props) => {
    const { classes } = props

    return (
        <div className={classes.root}>
            <GridList 
                cellHeight={180} 
                className={classes.gridList}>
                {props.list.map(item => (
                    <GridListTile 
                        key={item.icon} 
                        component={'a'} 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={require(`./../assets/${item.icon}`)} alt={item.title} />
                        <GridListTileBar
                            title={item.title}
                            subtitle={<span>{item.text}</span>}
                            key={item.icon}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

Grid.propTypes = {
    classes: PropTypes.object.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired, 
        link: PropTypes.string
    }))
}

export default withStyles(styles)(Grid)
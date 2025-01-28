import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'

const Home = ({ body }) => (console.log(body),
    <>
        <Typography align="center" 
                    color="textSecondary"
                    paragraph>
                    {body.text}
        </Typography>
        <div className="App-home__actions">
            <Grid container spacing={24} justify="center" alignItems="center">
                {
                    body.buttons.map(button => 
                        <Grid item xs={12} sm={6} key={button.text}>
                            <Button variant="contained" 
                                    color="default" 
                                    fullWidth
                                    component={ button.download ? "a" : Link }
                                    {
                                        ...(button.download ? 
                                            { 
                                                href: `${process.env.PUBLIC_URL}/${button.filename}`,
                                                download: button.filename,
                                            } : 
                                            { to: process.env.PUBLIC_URL + button.link })
                                    }>
                                <Icon fontSize="default">{button.icon}</Icon>
                                {button.text}
                            </Button>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    </>
)

Home.propTypes = {
    body: PropTypes.any
}

export default Home
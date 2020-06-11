import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];



class Projects extends Component {
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
              <Toolbar>
                {/* <CameraIcon className='icon' /> */}
                {/* <Typography variant="h6" color="inherit" noWrap>
                  Projects
                </Typography> */}
              </Toolbar>
            </AppBar>
            <main>
              {/* Hero unit */}
              <div className='heroContent'>
                <Container maxWidth="sm">
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Our Projects
                  </Typography>
          
    
                </Container>
              </div>
              <Container className='cardGrid' maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className='card'>
                        <CardMedia
                          className='cardMedia'
                          image="https://source.unsplash.com/random"
                          title="Image title"
                        />
                        <CardContent className='cardContent'>
                          <Typography gutterBottom variant="h5" component="h2">
                            Heading
                          </Typography>
                          <Typography>
                            This is a media card. You can use this section to describe the content.
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            View
                          </Button>
                          <Button size="small" color="primary">
                            Edit
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </main>
            {/* Footer */}
            <footer className='footer'>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
              </Typography>
              <Copyright />
            </footer>
            {/* End footer */}
          </React.Fragment>

        )
    }
}

export default Projects
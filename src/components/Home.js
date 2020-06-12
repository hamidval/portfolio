import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import londonSky from './londonSky.jpg'
import About from './About'
import Projects from './Projects'
const imageStyle = {
    backgroundImage: `url(${londonSky})`,
    height:'100vh',
    backgroundSize: 'auto 100%',
    textAlign: 'center',
    position: 'inline',
    marginTop: '0  !important'

  }





class Home extends Component {



    render() {

        return ( 
            



            <div>
                <div style={imageStyle}>
                    <div className='home-title'>
                        Skyline Developers
                    </div>

                </div>
                <div className='h-100'>
                    <About/>                   
                </div>
                <div className='h-100'>
                    <Projects/>
                </div>
            </div>

        );
    }
}

export default withRouter(Home);
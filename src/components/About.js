import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import londonSky from './londonSky.jpg'



class About extends Component {

   constructor(props){
        super(props)
        this.state={}

   }


    render() {

        return ( 
        
        <div className='par-div'>

            <div className='about-div-40'>
                <div className='abs-txt strokeme'>About Us</div>
                <img className='about-img' src={londonSky}/>
            
            </div>
            <div className='about-div'>
                <div>Who we are? What we do?</div>
                <div>
                    <p>
                        We are a small development group based in London, looking to take on small and medium sized projects
                        Our developers are young, ambitious and skilled in web and app development projects
                    </p>
                </div>
            </div>
            <div className='about-div'>
                <div>Services</div>
                <div>

                </div>
            </div>

        </div>
        );
    }
}

export default withRouter(About);
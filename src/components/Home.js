import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import londonSky from './londonSky.jpg'

const imageStyle = {
    backgroundImage: `url(${londonSky})`,
    height:'100vh',
    backgroundSize: 'auto 100%',
    textAlign: 'center'

  }





class Home extends Component {



    render() {

        return ( 
            
            <section id="Menu">
                {/* <nav class="TopMenu">
                    <ul>
                        <li class="Logo">Logo</li>
                        <li class="MenuLinks"><a href="#">Menu</a></li>
                        <li class="MenuLinks"><a href="#">Menu</a></li>
                        <li class="MenuLinks"><a href="#">Menu</a></li>
                    </ul>
                </nav> */}
                <div className="Banner" style={imageStyle}>
                    <h1 >Something catchy!</h1>
                </div>
            </section>

        );
    }
}

export default withRouter(Home);
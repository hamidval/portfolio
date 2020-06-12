import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'



class Home extends Component {



    render() {

        return ( 
            
            <section id="Menu">
                <nav class="TopMenu">
                    <ul>
                        <li class="Logo">LOGO</li>
                        <li class="MenuLinks"><a href="#">Menu</a></li>
                        <li class="MenuLinks"><a href="#">Menu</a></li>
                        <li class="MenuLinks"><a href="#">Menu</a></li>
                    </ul>
                </nav>
                <div className="Banner">
                    <h1>Something catchy!</h1>
                </div>
            </section>

        );
    }
}

export default withRouter(Home);
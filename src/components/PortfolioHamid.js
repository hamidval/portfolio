import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import hamidBack from './hamid-back.jpg'
import {Navbar,Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap'


const imageStyle = {
    backgroundImage: `url(${hamidBack})`,
    backgroundSize: 'cover',
    height: '100%',
    width:'100%',
    top: '0',
    position: 'fixed',
    overflow:'auto'
  
  };
  

class PortfolioHamid extends Component {
        constructor(props){
            super(props)
            this.state = {skills:["AWS","JavaScript","ReactJS","NodeJs","Java","Python","ExpressJS"],
                          experience:["YouView TV", "MS Learning Circle", "Next PLC", "Skyline Developers"],
                          education:["City, University", "Wanstead High School"],
                          interests:["swimming","teaching","AI"],
                            status:0}
        }


        setStatus=(val)=>{
            this.setState({status:val})

        }

    render() {

        return ( 
            
      

            <div style={imageStyle}>

                <div className='nav-port'>
                    <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                    <Navbar.Brand href="#home">Hamid's Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto nav-port">
                        <Nav.Link onClick={()=>{this.setStatus(1)}} href="#features">Knowledge</Nav.Link>
                        <Nav.Link onClick={()=>{this.setStatus(2)}} href="#pricing">Experience</Nav.Link>
                        <Nav.Link href="#pricing">Education</Nav.Link>
                        <Nav.Link href="#pricing">Interests</Nav.Link>
                        
                    
                        </Nav>

                    </Navbar.Collapse>
                    </Navbar>

                </div>
                {this.state.status == 1?
                <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='grid'>

                            {
                                this.state.skills.map((item,index)=>(
                                    <div  className='service skills'>
                                    <div className="card" style={{width: '18rem',color:'black'}}>
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div className="card-body">
                                    <h5 className="card-title">{item}</h5>
                                 
                                    </div>
                                  </div>
                                </div>
                                ))
                            }
            
                        </div>
                        

                    </div>

           
                    <div className='col-5 desc'>
                        <p>
                            My aim is to be seen as "not your average developer". 
                            I have a diverse set of skills, mostly self taught in my spare time. 
                            Strong Skills in Web Development
                        </p>

                    </div>

                </div>
                
        
                </div>
                :null}

                {this.state.status == 2?
                <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='grid'>

                            {
                                this.state.experience.map((item,index)=>(
                                    <div  className='service skills'>
                                    <div className="card" style={{width: '18rem',color:'black'}}>
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div className="card-body">
                                    <h5 className="card-title">{item}</h5>
                                 
                                    </div>
                                  </div>
                                </div>
                                ))
                            }
            
                        </div>
                        

                    </div>

           
                    <div className='col-5 desc'>
                        <p>
                            My aim is to be seen as "not your average developer". 
                            I have a diverse set of skills, mostly self taught in my spare time. 
                            Strong Skills in Web Development
                        </p>

                    </div>

                </div>
                
        
                </div>
                :null}
                
                {this.state.status == 3?
                <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='grid'>

                            {
                                this.state.experience.map((item,index)=>(
                                    <div  className='service skills'>
                                    <div className="card" style={{width: '18rem',color:'black'}}>
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div className="card-body">
                                    <h5 className="card-title">{item}</h5>
                                 
                                    </div>
                                  </div>
                                </div>
                                ))
                            }
            
                        </div>
                        

                    </div>

           
                    <div className='col-5 desc'>
                        <p>
                            My aim is to be seen as "not your average developer". 
                            I have a diverse set of skills, mostly self taught in my spare time. 
                            Strong Skills in Web Development
                        </p>

                    </div>

                </div>
                
        
                </div>
                :null}
                
                {this.state.status == 4?
                <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='grid'>

                            {
                                this.state.experience.map((item,index)=>(
                                    <div  className='service skills'>
                                    <div className="card" style={{width: '18rem',color:'black'}}>
                                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div className="card-body">
                                    <h5 className="card-title">{item}</h5>
                                 
                                    </div>
                                  </div>
                                </div>
                                ))
                            }
            
                        </div>
                        

                    </div>

           
                    <div className='col-5 desc'>
                        <p>
                            My aim is to be seen as "not your average developer". 
                            I have a diverse set of skills, mostly self taught in my spare time. 
                            Strong Skills in Web Development
                        </p>

                    </div>

                </div>
                
        
                </div>
                :null}


  

              
   
            </div>

        );
    }
}

export default withRouter(PortfolioHamid);
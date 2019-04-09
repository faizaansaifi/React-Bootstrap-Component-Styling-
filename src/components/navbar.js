import React , {Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import "./navbar.css";
class Navigation extends Component{
    render(){
        return(
            <div style={{width:'88%',margin:'auto'}}>

            <Navbar bg="white" variant="light" style={{fontWeight:'bolder',color:'black'}}>
                 <Navbar.Brand href="#home"><img src="https://i.pinimg.com/originals/54/6d/bf/546dbfaf0e6f68a6c3bf41d74e66991a.jpg"/></Navbar.Brand>
              <Nav className="mr-auto">
                    <Nav.Link href="#home">MEN</Nav.Link>
                    <Nav.Link href="#features">WOMEN</Nav.Link>
                    <Nav.Link href="#pricing">KIDS</Nav.Link>
                    <Nav.Link href="#pricing">HOME&LIVING</Nav.Link>
                    <Nav.Link href="#pricing">Discover</Nav.Link>
              </Nav>
             <Form inline>
                <FormControl
                    type="text"
                    placeholder="search for product brands and more"
                    className="mr-5"
                    style={{border:'none',backgroundColor:'#F5F5F6',width:'300px',borderRadius:'0%'}}
                />
                <span><i class="far fa-user"></i></span>
                <span><i class="far fa-bookmark"></i></span>
                <span><i class="fas fa-shopping-bag"></i></span>
            </Form>
            </Navbar>
        </div>
        );
    }
}


export default Navigation ;
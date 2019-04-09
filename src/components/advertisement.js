import React , {Component } from 'react'
import {Carousel} from 'react-bootstrap'; 


class Advertisement extends Component{
    render(){
        return(
        <div style={{marginTop:'35px',marginBottom:'35px'}}>
             <Carousel>
                    <Carousel.Item>
                    <img
                           className="d-block w-75 h-100"
                           src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/26/96a641be-a42f-4919-bacf-9d84ec173e091553594813424-Desktop_02_02--1-.jpg"
                           alt="Third slide"
                        />
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                           className="d-block w-75 h-100"
                           src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/26/4874863e-c3ac-4052-b5b9-14ef073a67631553594813440-Desktop_02_02--2-.jpg"
                           alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
        </div>
        );
    }
}


export default Advertisement;
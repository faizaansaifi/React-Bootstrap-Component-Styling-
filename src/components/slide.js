import React , {Component } from 'react'
import {Carousel} from 'react-bootstrap';


class Slide extends Component{
    render(){
        return(
        
            <div  style={{marginLeft:'88px',marginRight:'88px',marginTop:'40px',marginBottom:'35px'}}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                           src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/4/3/5fb6f6e7-0852-42cd-9b2a-cd57bfe3b8831554290777983-desk--1-.jpg"
                           alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                           src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/4/3/aa859c1e-6f1c-4ece-a796-552bb24e45b81554290777923-Slide-show-banner.jpg"
                           alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/4/3/9df29e19-5403-40ba-a558-20bf3f148bef1554290777971-desk2.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/4/3/1eca0e18-6002-4d6a-bad7-28d54cf01ca51554290777944-Slide.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
            </div>
        );
    }
}


export default Slide;
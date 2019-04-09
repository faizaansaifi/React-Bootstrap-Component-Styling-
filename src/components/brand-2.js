import React , {Component } from 'react'
import {Container,Col,Row,Image} from 'react-bootstrap'; 

class Brand2 extends Component{
    render(){
        return(
        <div style={{marginTop:'15px'}}>
                <Container>
                            <Row>
                                <Col xs={6} md={3}>
                                <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/3/5e61da22-cdbf-4ef6-9f2b-402c0cf115ec1554285571709-Flying-Machine---Killer---AHPMB_B.jpg" thumbnail />
                                </Col>
                                <Col xs={6} md={3}>
                                <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/1/ca86fa09-0dba-4992-aa68-4de17849c5ff1554111839382-Vareesha_AHPMB_B.jpg" thumbnail />
                                </Col>
                                <Col xs={6} md={3}>
                                <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/2/1b05cd28-3e40-4d5c-8b19-9e3f619e87351554204764595-Global-Desi---Upto-60--Off_AHPMB_BF8-_NAYo_AHPMB_BF.jpg" thumbnail />
                                </Col>
                                <Col xs={6} md={3}>
                                <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/1/0d9f226b-5173-4f9b-b18e-e1e812ed131b1554112866811-8af57756-d8bb-4398-9470-6f9db066c8e51553679570554-American-Tourister_AHPMB_B.jpg" thumbnail />
                                </Col>
                            </Row>
                </Container>
        </div>
        );
    }
}


export default Brand2;
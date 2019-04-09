import React , {Component } from 'react'
import {Container,Col,Row,Image} from 'react-bootstrap'; 


class Brands extends Component{
    render(){
        return(
        <div>
                <Container>
                            <Row>
                                <Col xs={6} md={3}>
                                <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/3/a5c4e943-e8e1-4ecd-b2ba-fcf076aa4e831554289323095-BIF-HRX.jpg" thumbnail />
                                </Col>
                                <Col xs={6} md={3}>
                                <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/1/c34a9962-9d5a-4256-b2df-6d0c5ca73fd41554112439570-3eb1f363-9eb2-4c1e-b39e-2809375dd5da1553509151232-Esprit-Forever-New-Tomst-_AHPMB_BF.jpg" thumbnail />
                                </Col>
                                <Col xs={6} md={3}>
                                <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/2/3605d33b-e046-4820-b4f7-875b0c2a93021554196462621-Mufti---JNS_Wrangler---JNS_AHPMB_AR9.jpg" thumbnail />
                                </Col>
                                <Col xs={6} md={3}>
                                <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/1/875962a3-bb60-4607-b061-91ab8b6c40d31554112554946-f80de2d4-004f-4899-8a6c-2db9035419a11553584343888-Crocs_-AHPMB_AR.jpg" thumbnail />
                                </Col>
                            </Row>
                </Container>
        </div>
        );
    }
}


export default Brands;
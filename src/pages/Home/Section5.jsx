/* eslint-disable no-unused-vars */
import React from 'react'
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {IOSlogo, AndroidLogo, BurgerShop, Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9, Brand10, Brand11} from "../../assets/index"



function Section5() {
  return (
<>
<section className='shop_section'>
    <Container>
       <Row className='align-items-center'>
<Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
<h4>Download mobile App and</h4>
<h2>Save up to 20%</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ad consequuntur totam quo mollitia saepe. Quae praesentium veniam, vero eveniet at consectetur officia reprehenderit quis.</p>
<Link to="/">
<img  src={IOSlogo} alt="IOS" className='img-fluid store me-3'/>
</Link>
<Link to="/">
<img  src={AndroidLogo} alt="Android" className='img-fluid store me-3'/>
</Link>
</Col>
<Col lg={6}>
<img src={BurgerShop}   alt="e-shop" className='img-fluid' />
</Col>

       </Row>

    </Container>


</section>
<section className='brand_section'>
<Container>
<Row>
<Carousel>
      <Carousel.Item>
        <Carousel.Caption>
            <div className='d-flex align-items-center justify-content-between'>
<div className='brand_img'>
<img src={Brand1} className='img-fluid' alt="brand-1"/>
</div>
<div className='brand_img'>
<img src={Brand2} className='img-fluid' alt="brand-2"/>
</div>
<div className='brand_img'>
<img src={Brand3} className='img-fluid' alt="brand-3"/>
</div>
<div className='brand_img'>
<img src={Brand4} className='img-fluid' alt="brand-4"/>
</div>
<div className='brand_img'>
<img src={Brand5} className='img-fluid' alt="brand-5"/>
</div>
<div className='brand_img'>
<img src={Brand6} className='img-fluid' alt="brand-6"/>
</div>

            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
            <div className='d-flex align-items-center justify-content-between'>
<div className='brand_img'>
<img src={Brand7} className='img-fluid' alt="brand-7"/>
</div>
<div className='brand_img'>
<img src={Brand8} className='img-fluid' alt="brand-8"/>
</div>
<div className='brand_img'>
<img src={Brand9} className='img-fluid' alt="brand-9"/>
</div>
<div className='brand_img'>
<img src={Brand10} className='img-fluid' alt="brand-10"/>
</div>
<div className='brand_img'>
<img src={Brand11} className='img-fluid' alt="brand-11"/>
</div>
<div className='brand_img'>
<img src={Brand2} className='img-fluid' alt="brand-12"/>
</div>

            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</Row>

</Container>

</section>

</>
  )
}

export default Section5
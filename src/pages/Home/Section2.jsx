/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Pizza, Salad, Delivery} from "../../assets/index"



const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia architecto, voluptatem saepe sequi quo exercitationem ratione reprehenderit aliquam natus minus?",
  },

  {
    image: Salad,
    title: "Quality Foods",
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia architecto, voluptatem saepe sequi quo exercitationem ratione reprehenderit aliquam natus minus?",
  },

  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia architecto, voluptatem saepe sequi quo exercitationem ratione reprehenderit aliquam natus minus?",
  },
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2>The burger tastes better when you eat it with your family</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              architecto, voluptatem saepe sequi quo exercitationem ratione
              reprehenderit aliquam natus minus?
            </p>
            <Link to="/" className="btn order_now btn_red">
              Explore Full Menu
            </Link>
          </Col>
        </Row>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
{mockData.map((cardData, index) => (
<Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
<div className="about_box text-center">
<div className="about_icon">
<img src={cardData.image}
className="img-fluid"
alt="icon"
/>
</div>
<h4>{cardData.title}</h4>
<p>{cardData.paragraph}</p>
</div>

</Col>


))
}

          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;

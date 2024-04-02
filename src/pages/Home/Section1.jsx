/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {hero} from "../../assets/index";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={hero} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">$7.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">with tomatoe</h2>
              <p className="text-white pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                nam eius excepturi laborum debitis. Eligendi et facere labore ad
                officia.
              </p>
<Link to="/" className="btn order_now">
Order Now
</Link>


            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;

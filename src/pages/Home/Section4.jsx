/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {PromotionImage} from "../../assets/index";

function Section4() {
  return (
    <>
    <section className="promotion_section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center mb-5 mb-lg-0">
            <img src={PromotionImage} className="img-fluid" alt="Promotion" />
          </Col>
          <Col lg={6} className="px-5">
            <h2>Nothing brings people together like a good burger</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              reiciendis expedita qui, esse, dolore error quidem quasi
              aspernatur molestiae beatae voluptate, voluptates sequi debitis
              sed?
            </p>
            <ul>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate nesciunt culpa explicabo numquam eveniet illum?
                </p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  maiores excepturi ipsa ducimus inventore nisi.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      </section>
{/* BG Parallex Scroll */}

<section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;

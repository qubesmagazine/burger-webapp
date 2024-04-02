/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import {user1, user2, user3, user4} from "../../assets/index"



function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={user1} className="img-fluid" alt="user-1" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates maiores deleniti rem corrupti officiis aut qui ad
                  nobis corporis nesciunt.
                </p>
                <div className="item_rating mb-2">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY NALE DARMEN</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={user2} className="img-fluid" alt="user-2" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates maiores deleniti rem corrupti officiis aut qui ad
                  nobis corporis nesciunt.
                </p>
                <div className="item_rating mb-2">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY BALIE NORRMEN</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={user3} className="img-fluid" alt="user-3" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates maiores deleniti rem corrupti officiis aut qui ad
                  nobis corporis nesciunt.
                </p>
                <div className="item_rating mb-2">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY JAL ORAND</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={user4} className="img-fluid" alt="user-4" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates maiores deleniti rem corrupti officiis aut qui ad
                  nobis corporis nesciunt.
                </p>
                <div className="item_rating mb-2">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY FALE ENAL</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;

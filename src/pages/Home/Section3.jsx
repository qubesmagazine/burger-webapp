/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8} from "../../assets/index"

import Cards from "../../components/Layout/Cards";
import { Link } from "react-router-dom";

const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 9.25,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 2.0,
    price: 8.35,
  },
  {
    id: "0003",
    image: Image3,
    title: "Veggie Burger",
    paragraph: "Grilled portobello mushroom, avocado, lettuce, tomato, onion",
    rating: 4.5,
    price: 12.99,
  },
  {
    id: "0004",
    image: Image4,
    title: "Chicken Burger",
    paragraph: "Grilled chicken breast, lettuce, tomato, mayonnaise",
    rating: 4.0,
    price: 10.5,
  },
  {
    id: "0005",
    image: Image5,
    title: "Fish Burger",
    paragraph: "Battered fish fillet, lettuce, tartar sauce, mustard, cheddar",
    rating: 4.2,
    price: 14.75,
  },
  {
    id: "0006",
    image: Image6,
    title: "Mushroom Swiss Burger",
    paragraph: "Cheddar cheese, ketchup, Grilled beef patty, mustard, cheddar",
    rating: 4.8,
    price: 11.99,
  },
  {
    id: "0007",
    image: Image7,
    title: "BBQ Bacon Burger",
    paragraph: "Grilled beef patty, bacon, cheddar cheese, BBQ sauce",
    rating: 4.3,
    price: 13.25,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "Cheddar cheese, ketchup, Grilled beef patty, mustard, cheddar",
    rating: 4.3,
    price: 13.25,
  },
];


//Rating Logical Data

const renderRatingIcons = (rating)=> {
   const stars = [];

   for(let i=0; i < 5; i++) {
if(rating > 0.5) {

  stars.push(<i key={i} className="bi bi-star-fill"></i>);
  rating--
} else if (rating > 0 && rating < 1) {
  stars.push(<i key={"half"} className="bi bi-star-half"></i>);
  rating--

}else {
  stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
}
   }

return stars;
}


function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY BURGERS</h2>
            <p className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
              quisquam. consectetur adipisicing elit. Itaque, quisquam
            </p>
          </Col>
        </Row>
        <Row>
            {mockData.map((cardData, index) => (
                <Cards 
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
                />
            ))}
        </Row>
<Row className="pt-5">
<Col sm={6} lg={5}>
<div className="ads_box ads_img1 mb-5 mb-md-0">
<h4 className="mb-0">GET YOUR FREE</h4>
<h5>CHEESE FRIES</h5>
<Link to="/" className="btn btn_red px-4 rounded-0">
Learn More
</Link>
</div>


</Col>
<Col sm={6} lg={7}>
<div className="ads_box ads_img2">
<h4 className="mb-0">GET YOUR FREE</h4>
<h5>CHEESE FRIES</h5>
<Link to="/" className="btn btn_red px-4 rounded-0">
Learn More
</Link>
</div>
</Col>

</Row>



      </Container>
    </section>
  );
}

export default Section3;

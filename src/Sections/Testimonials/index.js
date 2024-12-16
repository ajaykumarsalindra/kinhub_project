import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="Collaborating with KinHub Infotech has been an amazing journey. Their innovative approach and top-notch support have transformed the way we do business."
            name="Team of Aurumstreet"
            image="avatar-4"
          />          

          <Card
            text="Working with KinHub has been a seamless experience. Their team truly understands how to turn ideas into reality with unmatched creativity and technical expertise."
            name="Ajay"
            image="avatar-2"
          />

          <Card
            text="We couldn’t have asked for a better partner than KinHub Infotech. Their commitment to quality and timely delivery makes them stand out in the industry"
            name="Team of Secondspace"
            image="avatar-3"
          />
          <Card
            text="KinHub Infotech has been an essential part of our business's digital transformation. Their innovative solutions and dedication have exceeded our expectations at every step."
            name="Jenny"
            image="avatar-1"
          />

          
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;

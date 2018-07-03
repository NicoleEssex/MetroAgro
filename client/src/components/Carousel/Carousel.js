import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "./Carousel.css";


const items = [
    {src: 'https://cdn1.medicalnewstoday.com/content/images/articles/285/285753/beans.jpg',
//   { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCqGFA0TPKcSnTEQlaI_1bKSfgyEWRzhJYY1u5sBmwinraiF5",
    // src: "https://rampages.us/manrykm/wp-content/uploads/sites/2601/2014/10/Cherries_May31.jpg",
 
  },
  {
    src: 'https://www.seriouseats.com/images/2017/11/20171031-squash-varieties-vicky-wasik-18.jpg',
   
  },
  {
    src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-apples-1521577242.jpg?resize=980:*',

  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
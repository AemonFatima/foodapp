import React from 'react';
import { Carousel } from 'antd';

const Testimonials = () => {
  const testimonials = [
    { id: 1, text: 'Great food and service!', author: 'John Doe' },
    { id: 2, text: 'Fast delivery and delicious meals.', author: 'Jane Smith' },
    // Add more testimonials as needed
  ];

  return (
    <Carousel autoplay>
      {testimonials.map((item) => (
        <div key={item.id}>
          <h3>{item.text}</h3>
          <p>{item.author}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;

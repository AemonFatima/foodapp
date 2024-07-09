import React from 'react';
import { Card } from 'antd';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <Card>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default FeatureCard;

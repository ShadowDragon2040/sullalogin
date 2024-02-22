import React from 'react';
import { Card } from 'react-bootstrap';

const TermekCard = ({ data }) => {
  const { price, name } = data;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Price: {price}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TermekCard;

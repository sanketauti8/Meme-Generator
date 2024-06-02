
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem', margin: '25px' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Button
          onClick={() => navigate(`/edit?url=${props.img}`)}
          variant="primary"
          className="mt-auto"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;

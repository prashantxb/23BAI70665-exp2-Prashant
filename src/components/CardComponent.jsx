import { Card, Col } from 'react-bootstrap'

function CardComponent({ title, text }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow card-hover">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardComponent

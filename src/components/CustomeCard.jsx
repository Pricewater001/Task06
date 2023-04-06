import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomeCard({url}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
    </Card>
  );
}

export default CustomeCard;
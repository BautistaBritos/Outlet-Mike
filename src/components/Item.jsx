import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ item }) => {
  return (
    <Card style={{ width: "18rem" }} className="cardZapatilla">
      <Card.Img variant="top" src={item.pictureUrl} height={320}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Link to={`/item/${item.id}`}><Button variant="primary">Detalle</Button></Link>
      </Card.Body>
    </Card>
  );
};

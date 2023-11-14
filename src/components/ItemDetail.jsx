import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ItemDetail = ({ item }) => {
  return (
    <>
      <h1 className="tituloDetalle">{item.title}</h1>
      <div className="divDetail">
      <Card style={{ width: "30rem" }} className="cartaDetail">
        <Card.Img variant="top" src={item.pictureUrl} className="w-100"/>
        <Card.Body>
          <Card.Text>
          {item.description}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      <p className="parrafoDetail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati velit eaque inventore magnam soluta adipisci aliquam, praesentium sint eos dicta ab dignissimos, aliquid, cum accusamus. Labore, cumque. Inventore, ad saepe?</p>
      </div>
    </>
  );
};

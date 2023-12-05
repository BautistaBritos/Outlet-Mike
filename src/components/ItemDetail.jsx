import { useContext } from "react";
import Card from "react-bootstrap/Card";

import { CartContext } from "../contexts/CartContext";
import { ItemCounter } from "./ItemCounter";

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);

  const add = (quantity) => {
    onAdd(item, quantity);
  };

  return (
    <>
      <h1 className="tituloDetalle">{item.title}</h1>
      <div className="divDetail">
        <Card className="cartaDetail">
          <Card.Img variant="top" src={item.pictureUrl} className="w-100" />
          <Card.Body>
            <Card.Text className="centrar">{item.description}</Card.Text>
          </Card.Body>
          <h2 className="centrar">Stock: {item.stock}</h2>
          <ItemCounter onAdd={add} stock={item.stock} initial={1} />
        </Card>
      </div>
    </>
  );
};

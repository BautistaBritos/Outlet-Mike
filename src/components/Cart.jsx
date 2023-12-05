import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { CartContext } from "../contexts/CartContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";

const initialsValues = {
  name: "",
  surname: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const { clear, items, onRemove } = useContext(CartContext);
  const [buyer, setBuyer] = useState(initialsValues);

  const navigate = useNavigate();

  const cartTotal = items.reduce(
    (acumulator, valorActual) =>
      acumulator + valorActual.quantity * valorActual.price,
    0
  );

  const handleChange = (event) => {
    setBuyer((buyer) => {
      return {
        ...buyer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const sendOrder = (e) => {
    e.preventDefault();

    const order = {
      buyer: buyer,
      items: items,
      total: cartTotal,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        Swal.fire({
          title: "Gracias por su compra!",
          text: "Su orden " + id + " ha sido realizado con exito.",
          icon: "success",
        });
        setBuyer(initialsValues);
        clear();
      }
    });
  };

  if (!items.length) {
    return (
      <Container className="carritoVacio">
        <h2>Carrito vacio. Compra Algo!</h2>
        <Button onClick={() => navigate("/")}>Volver al Home</Button>
      </Container>
    );
  }

  return (
    <Container>
      <div className="tablaCart">
        <h1 className="h1carro">Carrito</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Zapatilla</th>
              <th>Cantidad</th>
              <th>Imagen</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td><img src={item.pictureUrl} alt="zapatilla" width={200}/></td>
                <td>{item.price}</td>
                <td onClick={() => onRemove(item.id)}>X</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total: {cartTotal}</td>
            </tr>
          </tfoot>
        </Table>
        <Button onClick={clear} className="borrar">Vaciar Carrito</Button>
      </div>
      <div>
        <h2>Confirme su compra!</h2>
        <Form onSubmit={sendOrder} className="formulario">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={buyer.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={buyer.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              value={buyer.surname}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={buyer.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Realizar Compra
          </Button>
        </Form>
      </div>
    </Container>
  );
};

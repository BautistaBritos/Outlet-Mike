import { Link } from "react-router-dom";
import carrito from "../assets/carrito.png";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce(
    (acumulator, valorActual) => acumulator + valorActual.quantity,
    0
  );

  return (
    <Link to="/cart">
      <div>
        <img src={carrito} alt="Carro" width={58} />
        <span className="spanCart">{total}</span>
      </div>
    </Link>
  );
};

import { useState } from "react";
import Button from "react-bootstrap/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ItemCounter = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleIncreaseCount = () => {
    if (stock > count) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
    toast.success('Producto añadido!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      });
    setCount(initial);
  };

  return (
    <div>
      <div className="counter">
        <div onClick={handleDecreaseCount} className="tamanoSignos">
          -
        </div>
        <mark className="marcoCounter">{count}</mark>
        <div onClick={handleIncreaseCount} className="tamanoSignos">
          +
        </div>
      </div>
      <div className="agragarCarrito">
        <Button variant="primary" onClick={handleAdd}>
          Agregar al carrito
        </Button>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  );
};

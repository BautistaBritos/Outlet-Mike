import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { products } from "../data/products";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    myPromise.then((response) => {
        if(!id) {
            setItems(response)
        }else {
            const filterByCategoty = response.filter(item => item.category === id);
            setItems(filterByCategoty);
        }
    });
  }, [id]);

  return (
    <div>
      <h1 className="titulo">¡Bienvenidos al mejor Outlet del Pais!</h1>
      {items ? <ItemList items={items}/> : <>Loading...</>}
    </div>
    
  );
};

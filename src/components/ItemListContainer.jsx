import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";

import { ItemList } from "./ItemList";
import { Carrousel } from "./Carrousel";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
      ? collection(db, "items")
      : query(collection(db, "items"), where("categoryId", "==", id));

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("hola");
      else
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, [id]);

  return (
    <div>
      <h1 className="titulo">¡Bienvenidos al mejor Outlet del Pais!</h1>
      <Carrousel />
      <h2 className="tituloSecuandario">¡Productos!</h2>
      {items ? <ItemList items={items} /> : <>Loading...</>}
    </div>
  );
};

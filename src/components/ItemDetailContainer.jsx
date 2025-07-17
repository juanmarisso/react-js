import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((res) => {
        setItem(res);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <h2>Cargando detalle...</h2>;
  }

  if (!item) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Categoría: {item.category}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default ItemDetailContainer;

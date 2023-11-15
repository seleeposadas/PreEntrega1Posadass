import {useState, useEffect} from 'react';
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { useParams } from 'react-router-dom';
//import {products} from "../data/products.json";0
const url = 'https://fakestoreapi.com/products/';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(url + (id ? `?category=${id}` : ''));
        }, 2000);
      });

      promise
        .then((response) => fetch(response))
        .then((fetchResponse) => fetchResponse.json())
        .then((data) => {
          if (id) {
            const filterRes = data.filter((item) => item.category === id);
            setItems(filterRes);
          } else {
            setItems(data);
          }
        })
        .finally(() => setLoading(false));
    };

    fetchData();
  }, [id]);
  return (
    <>
      <Container>
        <h1>Lista</h1>
        <ItemList items={items}/>
      </Container>
    </>
  );
};
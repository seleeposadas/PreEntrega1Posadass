import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const url = 'https://fakestoreapi.com/products/';

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);
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
                const filterRes = data.find((item) => item.id == id);
                setItem(filterRes);
            })
        };
    
        fetchData();
      }, [id]);
      if(!item){
        return <>Loading...</>
      }

    return (
        <Box
          sx={{
            width: '95%',
            position: 'relative',
            overflow: { xs: 'auto', sm: 'initial' },
          }}
        >
          <Box/>
          <Card
            orientation="horizontal"
            sx={{
              width: '100%',
              flexWrap: 'wrap',
              overflow: 'auto',
            }}
          >
            <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
              <img
                src={item.image}
                loading="lazy"
                alt={item.title}
              />
            </AspectRatio>
            <CardContent>
              <Typography fontSize="xl" fontWeight="lg">
                {item.title}
              </Typography>
              <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                {item.category}
              </Typography>
              <Typography level="body-md" fontWeight="lg" textColor="text.tertiary">
                {item.description}
              </Typography>
              <Sheet
                sx={{
                  bgcolor: 'background.level1',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 },
                }}
              >
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                   Precio
                  </Typography>
                  <Typography fontWeight="lg">${item.price}</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Puntaje
                  </Typography>
                  <Typography fontWeight="lg">{item.rating.rate}</Typography>
                </div>
              </Sheet>
              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant="solid" color="primary">
                  COMPRAR
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      );
    }

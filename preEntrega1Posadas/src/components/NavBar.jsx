import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link, Box } from "@mui/material";
import Logo from "../assets/LOGO_TIENDA_n.png";

const NavBar = () => {
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products/';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const products = data;
        const categories = products.map((item) => item.category);
        const uniqueCategories = [...new Set(categories)];
        setUniqueCategories(uniqueCategories);
      })
      .catch(error => console.error("Error al obtener datos", error));
  }, []); 

  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={2}>
            <NavLink to="/"><img src={Logo} alt="Logo Viceada Cosmica" width="50px" /></NavLink>
          </Grid>
          <Grid item xs={8}>
            <nav>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {uniqueCategories.map(item => (
                  <Link
                    as={NavLink}
                    key={item}
                    sx={{
                      color: "text.primary",
                      marginRight: 2,
                      textDecoration: "none",
                    }}
                    to={`/category/${item}`}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </nav>
          </Grid>
          <Grid item xs={2}>
            <CartWidget />
          </Grid>
        </Grid>
        <hr></hr>
      </Container>
    </>
  );
};

export default NavBar;
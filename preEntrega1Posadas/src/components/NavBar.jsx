import CartWidget from "./CartWidget";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link, Box } from "@mui/material";
import Logo from "../assets/LOGO_TIENDA_n.png";

const NavBar = () => {
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
            <>
              {" "}
              <img src={Logo} alt="Logo de la empresa" width="50px" />
            </>
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
                <Link
                  href="#"
                  sx={{
                    color: "text.primary",
                    marginRight: 2,
                    textDecoration: "none",
                  }}
                >
                  PlayStation
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "text.primary",
                    marginRight: 2,
                    textDecoration: "none",
                  }}
                >
                  Xbox
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "text.primary",
                    marginRight: 2,
                    textDecoration: "none",
                  }}
                >
                  Retro Gamer
                </Link>
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

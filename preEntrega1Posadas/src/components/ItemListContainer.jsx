import Container from "@mui/material/Container";
import { Box } from "@mui/material";

export const ItemListContainer = (props) => {
  return (
    <>
      <Container>
        <h1>{props.greeting}</h1>
      </Container>
    </>
  );
};

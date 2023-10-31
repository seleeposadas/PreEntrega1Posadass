import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import Badge from "@mui/material/Badge";
export const CartWidget = () => {
  return (
    <>
      <Badge badgeContent={5} color="primary">
        <ShoppingCartSharpIcon />
      </Badge>
    </>
  );
};

export default CartWidget;

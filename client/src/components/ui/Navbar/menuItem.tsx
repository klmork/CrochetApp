import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

interface MenuItemProps {
  label: string;
  to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button p={[2, 4, 6]} color="white" fontSize="xl">
        {label}
      </Button>
    </Link>
  );
};

export default MenuItem;

import "../assets/css/style.css";

import { Link } from "react-router-dom";

import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";

import { BsFillShieldFill, BsSignpost } from "react-icons/bs";

const HomeScreen = () => {
  return (
    <div className="container">
      <Typography sx={{ color: "white", marginBottom: "20px" }} variant="h5">
        Seja Bem Vindo(a)
      </Typography>

      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <BsSignpost fontSize="small" />
            </ListItemIcon>
            <ListItemText><Link to="dados-gerais">Área Geral</Link></ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BsFillShieldFill fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to="/login">Área do administrador</Link>
            </ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default HomeScreen;

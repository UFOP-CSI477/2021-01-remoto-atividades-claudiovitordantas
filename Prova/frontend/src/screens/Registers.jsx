import { Link } from "react-router-dom";

import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";

import '../assets/css/style.css';

import { BsPencilFill, BsListStars, BsArrowLeft } from "react-icons/bs";

const Registers = () => {
  return (
    <div className="wrapper">
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <BsListStars fontSize="small" />
            </ListItemIcon>
            <ListItemText>Listagem</ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BsPencilFill fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to="/registros/inclusao">Inclusão</Link>
            </ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BsArrowLeft fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to="/dashboard">Voltar</Link>
            </ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default Registers;

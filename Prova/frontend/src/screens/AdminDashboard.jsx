import { useEffect } from "react";
import { Link } from "react-router-dom";

import { adminRequest } from "../api/api";

import Nav from "../components/Nav";

import axios from "axios";

import "../assets/css/style.css";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";

import {
  BsPeopleFill,
  BsShop,
  BsJournalText,
  BsHouse,
  BsArrowBarLeft,
} from "react-icons/bs";
import { FaSyringe } from "react-icons/fa";

const AdminDashboard = () => {
  const generate = async () => {
    try {
      const { data } = await adminRequest.post("/generateRandomData");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("persist:root");
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="wrapper">
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <BsPeopleFill fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to="/pessoas">Pessoas</Link>
            </ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FaSyringe fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to="/vacinas">Vacinas</Link>
            </ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BsShop fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to="/unidades">Unidades</Link>
            </ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BsJournalText fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to="/registros">Registros</Link>
            </ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BsHouse fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BsArrowBarLeft fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <span onClick={logout}>Sair</span>
            </ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default AdminDashboard;

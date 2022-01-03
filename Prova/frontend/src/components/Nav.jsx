import { Link } from "react-router-dom";
import { AppBar, Container, Typography } from "@mui/material";


const Nav = () => {
  return (
    <AppBar sx={{ padding: "20px 0", color: "white" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        maxWidth="xl"
      >
        <Typography sx={{ margin: "0 20px" }}>
          <Link to="/pessoas">Pessoas</Link>
        </Typography>
        <Typography sx={{ margin: "0 20px" }}>
          <Link to="/vacinas">Vacinas</Link>
        </Typography>
        <Typography sx={{ margin: "0 20px" }}>
          <Link to="/unidades">Unidades</Link>
        </Typography>
        <Typography sx={{ margin: "0 20px" }}>
          <Link to="/registros">Registros</Link>
        </Typography>
        <Typography sx={{ margin: "0 20px" }}>
          <Link to="/">Home</Link>
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Nav;

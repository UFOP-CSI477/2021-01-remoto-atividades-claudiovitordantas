import { Link } from "react-router-dom";
import { Grid, Container, Button } from "@material-ui/core";

import Hero from "../Hero";
import HomeNav from "../navs/HomeNav";
import Footer from "../Footer";

import "../../assets/css/Home.css";

const HomeScreen = () => {
  return (
    <>
      <HomeNav />
      <Hero />
      <Container maxWidth="xl">
        <Grid sx={{ marginTop: "30px" }} container spacing={1}>
          <Grid className="components" item xs={7}>
            <img src="https://i.imgur.com/wsWPYMj.jpg" alt="componentes" />
            <div className="components-txt components-txt-pos ">
              <span>Componentes</span>
              <Button
                style={{
                  backgroundColor: "#24292F",
                }}
                variant="contained"
              >
                <Link to="/products/department/componentes">Ver mais</Link>
              </Button>
            </div>
          </Grid>
          <Grid className="equipments" item xs={5}>
            <img src="https://i.imgur.com/jLM1wa9.jpg" alt="equipamentos" />
            <div className="equipments-txt equipments-txt-pos">
              <span>Equipamentos</span>
              <Button style={{
                  backgroundColor: "#24292F",
                }} variant="contained"><Link to="/products/department/equipamentos">Ver mais</Link></Button>
            </div>
          </Grid>
          <Grid className="accessories" item xs={4}>
            <img src="https://i.imgur.com/o1zToIr.jpg" alt="acessorios" />
            <div className="accessories-txt accessories-txt-pos">
              <span>Acessórios</span>
              <Button style={{
                  backgroundColor: "#24292F",
                }} variant="contained"><Link to="/products/department/acessorios">Ver mais</Link></Button>
            </div>
          </Grid>
          <Grid className="bikes" item xs={4}>
            <img src="https://i.imgur.com/saGnSU1.jpg" alt="bicicletas" />
            <div className="bikes-txt bikes-txt-pos">
              <span>Bicicletas</span>
              <Button style={{
                  backgroundColor: "#24292F",
                }} variant="contained"><Link to="/products/department/bicicletas">Ver mais</Link></Button>
            </div>
          </Grid>
          <Grid className="casual" item xs={4}>
            <img src="https://i.imgur.com/e1lbuEI.jpg" alt="casual" />
            <div className="casual-txt casual-txt-pos">
              <span>Casual</span>
              <Button style={{
                  backgroundColor: "#24292F",
                }} variant="contained"><Link to="/casual">Ver mais</Link></Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default HomeScreen;

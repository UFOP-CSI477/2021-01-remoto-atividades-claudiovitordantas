import { useEffect } from "react";
import "../assets/css/style.css";
import { adminRequest } from "../api/api";
import { Button, MenuItem, Paper, TextField, Typography } from "@mui/material";

import "../assets/css/style.css";
import { useState } from "react";

import { Link } from "react-router-dom";

const InclusionScreen = () => {
  const [info, setInfo] = useState({ people: [], vaccines: [], unites: [] });

  const [person, setPerson] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [unite, setUnite] = useState("");
  const [dose, setDose] = useState(0);

  const fetchAll = async () => {
    try {
      const { data } = await adminRequest.get("/getAllData");
      setInfo({
        people: data.people,
        vaccines: data.vaccines,
        unites: data.unites,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const includeDataHandler = async (person, vaccine, unite, dose) => {
    try {
      const { data } = await adminRequest.post("/inclusion", {
        personId: person,
        vaccineId: vaccine,
        uniteId: unite,
        dose,
      });
      console.log(data);
    } catch (error) {}
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    includeDataHandler(person, vaccine, unite, dose);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <form onSubmit={submitFormHandler} className="wrapper">
      <Typography variant="h4" sx={{ color: "white", marginBottom: "30px" }}>
        Inclusão de registros de vacinação
      </Typography>
      <Paper
        sx={{ display: "flex", flexDirection: "column", padding: "30px 60px" }}
      >
        <TextField
          sx={{ marginBottom: "20px" }}
          id="outlined-select-currency"
          select
          label="Pessoas"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          helperText="Por favor seleciona uma pessoa"
        >
          {info.people.map((person, i) => (
            <MenuItem key={i} value={person._id}>
              {person.nome}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ marginBottom: "20px" }}
          id="outlined-select-currency"
          select
          label="Unidades"
          value={unite}
          onChange={(e) => setUnite(e.target.value)}
          helperText="Por favor seleciona uma unidade"
        >
          {info.unites.map((unite, i) => (
            <MenuItem key={i} value={unite._id}>
              {unite.nome}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ marginBottom: "20px" }}
          id="outlined-select-currency"
          select
          label="Vacinas"
          value={vaccine}
          onChange={(e) => setVaccine(e.target.value)}
          helperText="Por favor seleciona uma vacina"
        >
          {info.vaccines.map((vaccine, i) => (
            <MenuItem key={i} value={vaccine._id}>
              {vaccine.nome}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ marginBottom: "20px" }}
          id="outlined-select-currency"
          select
          label="Dose"
          value={dose}
          onChange={(e) => setDose(e.target.value)}
          helperText="Por favor selecione a dose"
        >
          <MenuItem key={0} value={0}>
            <Typography>0 (dose única)</Typography>
          </MenuItem>
          <MenuItem key={1} value={1}>
            <Typography>1 (primeira dose)</Typography>
          </MenuItem>
          <MenuItem key={2} value={2}>
            <Typography>2 (segunda dose)</Typography>
          </MenuItem>
        </TextField>
        <Button type="submit" variant="contained">
          Registrar
        </Button>
      </Paper>
      <Typography sx={{ marginTop: "20px" }}>
        <Link to="/registros">Voltar</Link>
      </Typography>
    </form>
  );
};

export default InclusionScreen;

import { useState, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, TextField, Alert } from "@mui/material";

import { DatePicker } from "react-rainbow-components";
import { adminRequest } from "../api/api";
import Nav from "../components/Nav";

import { setMessage } from "../redux/slices/uiSlice";

import "../assets/css/style.css";

const RegisterPeople = () => {
  const ui = useSelector((state) => state.ui);
  console.log(ui);
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [date, setDate] = useState(null);

  const handleChange = (date) => {
    setDate(date);
  };

  const registerHandler = async (nome, cpf, data) => {
    try {
      const { data } = await adminRequest.post("/register", {
        nome,
        cpf,
        date,
      });
      dispatch(setMessage({ message: data.message, severity: data.severity }));
    } catch (error) {}
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    registerHandler(nome, cpf, date);
  };

  return (
    <>
      <Nav />
      <form onSubmit={submitFormHandler} className="loginWrapper">
        <Paper
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            padding: "40px 60px",
          }}
        >
          <TextField
            sx={{ marginBottom: "20px" }}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            size="small"
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            sx={{ marginBottom: "20px" }}
            id="outlined-basic"
            label="CPF"
            variant="outlined"
            size="small"
            onChange={(e) => setCpf(e.target.value)}
          />
          <DatePicker
            id="datePicker-1"
            value={date}
            onChange={handleChange}
            label="Data"
            formatStyle="small"
          />
          <Button sx={{ marginTop: "20px" }} type="submit" variant="contained">
            Cadastrar
          </Button>
          {ui.message && (
            <Alert sx={{marginTop: "20px"}} variant="filled" severity={ui.severity}>
              {ui.message}
            </Alert>
          )}
        </Paper>
      </form>
    </>
  );
};

export default RegisterPeople;

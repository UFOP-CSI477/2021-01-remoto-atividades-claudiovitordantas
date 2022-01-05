import { useDispatch } from "react-redux";
import { useState } from "react";

import { adminRequest } from "../api/api";

import {
  loginRequest,
  loginRequestSuccess,
} from "../redux/slices/adminSlice";

import { Alert, Button, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "../assets/css/style.css";

const LoginSreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = async (email, senha) => {
    dispatch(loginRequest());
    try {
      const { data } = await adminRequest.post("/login", {
        email,
        senha,
      });
      if (data.status === 400) {
        return;
      } else {
        dispatch(loginRequestSuccess(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    login(email, senha);
  };

  return (
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
          label="Email"
          variant="outlined"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          sx={{ marginBottom: "20px" }}
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          onChange={(event) => setSenha(event.target.value)}
        />
        <Button type="submit" variant="contained">
          Entrar
        </Button>
        <Typography sx={{ marginTop: "20px" }}>
          <Link to="/">Voltar</Link>
        </Typography>
      </Paper>
    </form>
  );
};

export default LoginSreen;

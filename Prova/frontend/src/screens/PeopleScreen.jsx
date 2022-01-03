import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import moment from "moment";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adminRequest } from "../api/api";

import Nav from "../components/Nav";

const PeopleScreen = () => {
  const [people, setPeople] = useState([]);
  
  const fetchPeople = async () => {
    try {
      const { data } = await adminRequest.get("/people");
      setPeople(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <>
      <Nav />;
      <Button
        sx={{ position: "absolute", top: "20%", left: "20%" }}
        variant="contained"
      >
        <Link to="/pessoas/cadastro">Cadastrar pessoas</Link>
      </Button>
      <TableContainer
        sx={{ margin: "200px auto", width: "60vw" }}
        component={Paper}
      >
        <Table sx={{}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell >CPF</TableCell>
              <TableCell >Data de nascimento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person, i) => (
              <TableRow
                key={person.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {person._id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {person.nome}
                </TableCell>
                <TableCell >{person.cpf}</TableCell>
                <TableCell >
                  {moment(person.dataNascimento).format("YYYY-MM-DD")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PeopleScreen;

import Nav from "../components/Nav";
import { useEffect, useState } from "react";

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";

import { adminRequest } from "../api/api";

const VaccinesScreen = () => {
  const [vaccines, setVaccines] = useState([]);

  const fetchVaccines = async () => {
    try {
      const { data } = await adminRequest.get("/vaccines");
      setVaccines(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVaccines();
  }, []);

  return (
    <>
      <Nav />
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
              <TableCell >Fabricante</TableCell>
              <TableCell >País</TableCell>
              <TableCell >Doses</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vaccines.map((vaccine, i) => (
              <TableRow
                key={vaccine.i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {vaccine._id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {vaccine.nome}
                </TableCell>
                <TableCell component="th" scope="row">
                  {vaccine.fabricante}
                </TableCell>
                <TableCell component="th" scope="row">
                  {vaccine.pais}
                </TableCell>
                <TableCell component="th" scope="row">
                  {vaccine.doses}
                </TableCell>
                <TableCell >{vaccine.cpf}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default VaccinesScreen;

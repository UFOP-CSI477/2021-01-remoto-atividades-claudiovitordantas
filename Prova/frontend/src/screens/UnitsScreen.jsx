import Nav from "../components/Nav";

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

import { adminRequest } from "../api/api";
import { useEffect, useState } from "react";

const UnitsScreen = () => {
  const [units, setUnits] = useState([]);

  const fetchUnits = async () => {
    try {
      const { data } = await adminRequest.get("/units");
      setUnits(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUnits();
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
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Data de nascimento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {units.map((unit, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {unit._id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {unit.nome}
                </TableCell>
                <TableCell align="right">{unit.cidade}</TableCell>
                <TableCell align="right">{unit.estado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UnitsScreen;

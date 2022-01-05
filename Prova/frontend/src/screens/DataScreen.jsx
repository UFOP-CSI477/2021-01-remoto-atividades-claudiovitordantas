import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { BsTrashFill } from "react-icons/bs";

import { adminRequest } from "../api/api";

import {
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const DataScreen = () => {
  // const admin = useSelector((state) => state.admin);

  const [overallData, setOverallData] = useState(null);
  // console.log(overallData);
  const fetchData = async () => {
    try {
      const { data } = await adminRequest.get("/overallData");
      setOverallData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let astraPercent = (
    (overallData?.appliedAstraZeneca / overallData?.appliedDoses) *
    100
  ).toFixed(2);
  let pfizerPercent = (
    (overallData?.appliedPfizer / overallData?.appliedDoses) *
    100
  ).toFixed(2);
  let jansenPercent = (
    (overallData?.appliedJansen / overallData?.appliedDoses) *
    100
  ).toFixed(2);
  let cVacPercent = (
    (overallData?.appliedCoronavac / overallData?.appliedDoses) *
    100
  ).toFixed(2);

  return (
    <div className="wrapper">
      <TableContainer sx={{ width: "50vw" }} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Aplicação</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              {/* {admin.isLogged && <TableCell align="right">Excluir</TableCell>} */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Dose única
              </TableCell>
              <TableCell align="right">
                {overallData ? (
                  overallData.unicDoses
                ) : (
                  <CircularProgress size={20} />
                )}
              </TableCell>
              {/* {admin.isLogged && (
                <TableCell align="right" component="th" scope="row">
                  <Button variant="outlined" color="error">
                    <BsTrashFill />
                  </Button>
                </TableCell>
              )} */}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Primeira dose
              </TableCell>
              <TableCell align="right">
                {overallData ? (
                  overallData.firstDoses
                ) : (
                  <CircularProgress size={20} />
                )}
              </TableCell>
              {/* {admin.isLogged && (
                <TableCell align="right" component="th" scope="row">
                  <Button variant="outlined" color="error">
                    <BsTrashFill />
                  </Button>
                </TableCell>
              )} */}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Segunda dose
              </TableCell>
              <TableCell align="right">
                {overallData ? (
                  overallData.secondDoses
                ) : (
                  <CircularProgress size={20} />
                )}
              </TableCell>
              {/* {admin.isLogged && (
                <TableCell align="right" component="th" scope="row">
                  <Button variant="outlined" color="error">
                    <BsTrashFill />
                  </Button>
                </TableCell>
              )} */}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>TOTAL GERAL</strong>
              </TableCell>
              <TableCell align="right">
                {overallData ? (
                  overallData.appliedDoses
                ) : (
                  <CircularProgress size={20} />
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        sx={{ width: "50vw", marginTop: "20px" }}
        component={Paper}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Vacina</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">Porcentagem</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Coronavac
              </TableCell>
              <TableCell align="right">
                {overallData ? (
                  overallData.appliedCoronavac
                ) : (
                  <CircularProgress size={20} />
                )}
              </TableCell>
              <TableCell align="right">{`${cVacPercent}%`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Jansen
              </TableCell>
              <TableCell align="right">
                {overallData ? (
                  overallData.appliedJansen
                ) : (
                  <CircularProgress size={20} />
                )}
              </TableCell>
              <TableCell align="right">{`${jansenPercent}%`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Pfizer
              </TableCell>
              <TableCell align="right">
                {overallData ? (
                  overallData.appliedPfizer
                ) : (
                  <CircularProgress size={20} />
                )}
              </TableCell>
              <TableCell align="right">{`${pfizerPercent}%`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Astrazeneca
              </TableCell>
              <TableCell align="right">
                {overallData ? (
                  overallData.appliedAstraZeneca
                ) : (
                  <CircularProgress size={20} />
                )}
              </TableCell>
              <TableCell align="right">{`${astraPercent}%`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <strong>TOTAL GERAL</strong>
              </TableCell>
              <TableCell align="right">
                {overallData ? (
                  overallData.appliedDoses
                ) : (
                  <CircularProgress size={20} />
                )}
              </TableCell>
              <TableCell align="right">{`100%`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography sx={{ color: "white", marginTop: "20px" }}>
        <Link to="/">Voltar</Link>
      </Typography>
    </div>
  );
};

export default DataScreen;

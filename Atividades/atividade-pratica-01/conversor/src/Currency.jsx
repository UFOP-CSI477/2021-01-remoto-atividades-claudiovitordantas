import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import {setValue} from './state/currency-slice';

import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Card,
  Container,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControl,
  Paper 
} from "@material-ui/core";

import * as moment from "moment";
import "moment/locale/pt-br";

import DateFnsUtils from "@date-io/moment";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import { BsArrowRight } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#fff",
  },
  typography: {
    color: "#24292F",
  },
  select: {
    width: "200px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    padding: "50px 100px",
  },
  grid: {
    // backgroundColor: "red"
  },
  converteTo: {
    flex: "1",
  },
  converteFrom: {
    flex: "1",
  },
  value: {
    flex: "1",
  },
  go: {
    margin: "20px 0 0 20px",
  },
  arrow: {
    margin: "20px 20px 0 20px",
  },
  date: {
    display: "flex",
    position: "absolute",
    top: "35%",
    left: "11%",
  },
}));

const Currency = (props) => {
  const dispatch = useDispatch();

  const [currencyOne, setCurrencyOne] = useState("");
  const [currencyTwo, setCurrencyTwo] = useState("");
  const [value, setVal] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date());

  // let formatedDate = moment(selectedDate).format("YYYY-MM-DD HH:mm:ss:SSS");
  let formatedDate = moment(selectedDate).format("MM-DD-YYYY");

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(setValue(value));
    let values = {
      currencyOne,
      currencyTwo,
      formatedDate,
    }
    props.onSubmitForm(values)
  };

  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            className={classes.typography}
            component="div"
          >
            Conversor de moeda
          </Typography>
        </Toolbar>
      </AppBar>
      <form onSubmit={submitFormHandler}>
        <Container className={classes.container}>
          <div className={classes.date}>
            <span style={{ margin: "5px 10px 0 0" }}>
              Selecione a data da cotação:
            </span>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          </div>
          <Card  className={classes.card}>
            <div className={classes.value}>
              <TextField
                onChange={(e) => setVal(e.target.value)}
                id="outlined-basic"
                label="Valor"
                variant="outlined"
              />
            </div>
            <FormControl className={classes.converteFrom}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Converter de
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={currencyOne}
                onChange={(e) => setCurrencyOne(e.target.value)}
                autoWidth
                label="Age"
              >
                {(props.currencies || []).map((curr) => (
                  <MenuItem key={curr.tipoMoeda} value={curr.simbolo}>
                    {`${curr.nomeFormatado} (${curr.simbolo})`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className={classes.arrow}>
              <span>
                <BsArrowRight />
              </span>
            </div>
            <FormControl className={classes.converteTo}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Converter para
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={currencyTwo}
                onChange={(e) => setCurrencyTwo(e.target.value)}
                autoWidth
                label="Age"
              >
                {(props.currencies || []).map((curr) => (
                  <MenuItem key={curr.tipoMoeda} value={curr.simbolo}>
                    {`${curr.nomeFormatado} (${curr.simbolo})`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className={classes.go}>
              <Button type="submit" variant="contained" color="primary">
                <FiRotateCcw />
              </Button>
            </div>
          </Card>
        </Container>
      </form>
    </>
  );
};

export default Currency;

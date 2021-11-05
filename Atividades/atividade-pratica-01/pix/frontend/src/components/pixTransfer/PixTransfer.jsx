import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";

import { Form, Button, Alert } from "react-bootstrap";

import moment from "moment";

import { clearBankInfo } from "../../store/pix-slice";

import { fetchBankInfo, registerTransaction } from "../../store/pix-actions";
import classes from "./PixTransfer.module.css";

const PixTransfer = () => {
  const message = useSelector((state) => state.ui.message);

  const name = "Transferencia";

  const [value, setValue] = useState("");
  const [key, setKey] = useState("");
  const [keyType, setKeyType] = useState("");
  const [bank, setBank] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [showInput, setShowInput] = useState(false);

  const bankInfo = useSelector((state) => state.pix.bankInfo);
  const dispatch = useDispatch();

  const setKeyHandler = (event) => {
    setShowInput(true);
    setKeyType(event.target.value);
  };

  const setDateHandler = (event) => {
    setStartDate(moment(event.target.value).format("YYYY-MM-DD HH:mm"));
  };

  useEffect(() => {
    dispatch(fetchBankInfo());
    return () => {
      dispatch(clearBankInfo());
    };
  }, []);

  const submitFormHandler = (event) => {
    event.preventDefault();

    let dataObj = {
      name,
      key,
      keyType,
      value,
      bank,
      date: startDate,
    };

    dispatch(registerTransaction(dataObj));
  };

  let showTxt = null;
  let placeHolderTxt = null;

  if (keyType === "cpf") {
    showTxt = "Qual o CPF do distinatário?";
    placeHolderTxt = "CPF";
  } else if (keyType === "cnpj") {
    showTxt = "Qual o CNPJ do distinatário?";
    placeHolderTxt = "CNPJ";
  } else if (keyType === "cellNumber") {
    showTxt = "Informe o número do distinatário";
    placeHolderTxt = "Número";
  } else if (keyType === "email") {
    showTxt = "Informe o email do distinatário";
    placeHolderTxt = "Email";
  }

  return (
    <>
      <div className={classes.wrapper}>
        <h1>Transferência</h1>
        <Form onSubmit={submitFormHandler}>
          {message && (
            <Alert variant={message.variant}>{message.message}</Alert>
          )}

          <p className="mb-2 mt-3">Escolha a chave do destinatário</p>
          <Form.Select aria-label="as" onChange={setKeyHandler}>
            <option>Chaves</option>
            <option value="cpf">CPF</option>
            <option value="cnpj">CNPJ</option>
            <option value="email">E-mail</option>
            <option value="cellNumber">Num. de celular</option>
            <option value="randomKey">Chave aleatória</option>
          </Form.Select>
          {showInput && (
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              {showTxt ? (
                <>
                  <Form.Label>{showTxt}</Form.Label>
                  <Form.Control
                    onChange={(e) => setKey(e.target.value)}
                    type="text"
                    placeholder={placeHolderTxt}
                  />{" "}
                </>
              ) : (
                ""
              )}
              <Form.Label>Valor</Form.Label>
              <Form.Control
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Informe o valor"
              />
              <p className="mb-2 mt-3">Instituição</p>
              <Form.Select
                aria-label="as"
                onChange={(e) => setBank(e.target.value)}
              >
                {bankInfo.map((data) => (
                  <option value={data.name} key={data.id}>
                    {data.name}
                  </option>
                ))}
              </Form.Select>
              <p className="mt-3">Data</p>
              <div className="mt-3">
                <DatePicker selected={startDate} onChange={setDateHandler} />
              </div>
            </Form.Group>
          )}

          <Button className="mt-3" variant="primary" type="submit">
            Enviar
          </Button>  
        </Form>
      </div>
      <Link to="/">
        <p className={classes.icon}>PIX</p>
      </Link>
    </>
  );
};

export default PixTransfer;

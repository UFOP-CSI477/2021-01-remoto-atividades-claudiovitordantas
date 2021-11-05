import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { registerTransaction } from "../../store/pix-actions";

import { fetchKeys } from "../../store/pix-actions";

import moment from "moment";

import { Form, Button, Alert } from "react-bootstrap";

import classes from "../pixTransfer/PixTransfer.module.css";

export default function PixReviece() {
  const message = useSelector((state) => state.ui.message);

  const dispatch = useDispatch();

  let today = moment();
  let formatedDate = moment(today).format("YYYY-MM-DD HH:mm");

  const name = "recebimento";
  const [changed, setChanged] = useState(false);
  const [chosenKey, setChosenKey] = useState("");
  const keys = useSelector((state) => state.pix.keys);

  const changeHandler = (event) => {
    setChanged(true);
    setChosenKey(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchKeys());
  }, []);

  const submitFormHandler = (event) => {
    event.preventDefault();
    let dataObj = {
      name,
      date: formatedDate,
    };
    dispatch(registerTransaction(dataObj));
  };

  return (
    <>
      <div className={classes.wrapper}>
        <h1>Receber Pix</h1>
        <Form onSubmit={submitFormHandler}>
          {message && (
            <Alert variant={message.variant}>{message.message}</Alert>
          )}
          <p className="mb-2 mt-3">Escolha sua chave</p>
          <Form.Select onChange={changeHandler} aria-label="as">
            {keys.map((key) => (
              <option key={key.id} value={key.key}>
                {key.keyType}
              </option>
            ))}
          </Form.Select>
          <div className={classes.key}>
            {changed &&
              `${chosenKey}4br.gov.bcb.pix0111>CHAVE PIX<0224>DESCRIÇÃO DO PAGAMENTO<52040000530398654045.505802BR5921>NOME DO BENEFICIADO<6008>CIDADE<62100506>TXID<6304A2F7`}
                <Button type="submit" variant="primary">
                  Enviar código de pagamento
                </Button>
          </div>
        </Form>
      </div>
      <Link to="/">
        <p className={classes.icon}>PIX</p>
      </Link>
    </>
  );
}

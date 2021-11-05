import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import classes from "./PixKey.module.css";

const SetPixKeyForm = (props) => {
  const [keyType, setKeyType] = useState("");
  const [accountType, setAccountType] = useState("");
  const [pixKey, setPix] = useState("");

  const clearState = () => {
    setAccountType("");
    setKeyType("");
    setPix("");
  };

  const selectedKeyHandler = (event) => {
    setKeyType(event.target.value);
  };

  const selectedAcountTypeHandler = (event) => {
    setAccountType(event.target.value);
  };

  const enteredPixKeyHandler = (event) => {
    setPix(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!keyType || !accountType || !pixKey) {
      return;
    }

    props.onSubmitPix({
      pixKey: pixKey,
      accountType: accountType,
      keyType: keyType,
    });

    clearState();
  };

  let showTxt = null;
  let placeHolderTxt = null;

  if (keyType === "cpf") {
    showTxt = "Qual o seu CPF?";
    placeHolderTxt = "Seu CPF";
  } else if (keyType === "cnpj") {
    showTxt = "Qual o seu CNPJ?";
    placeHolderTxt = "Seu CNPJ";
  } else if (keyType === "cellNumber") {
    showTxt = "Informe seu número";
    placeHolderTxt = "Seu número";
  } else if (keyType === "email") {
    showTxt = "Informe seu email";
    placeHolderTxt = "Seu email";
  }

  return (
    <div className={classes.wrapper}>
      <h1>Incluir chave no Pix </h1>
      <p>Escolha uma chave para incluir ao Pix</p>
      <Form onSubmit={submitFormHandler}>
        <Form.Select value={keyType} aria-label="as" onChange={selectedKeyHandler}>
          <option>Chaves</option>
          <option value="cpf">CPF</option>
          <option value="cnpj">CNPJ</option>
          <option value="email">E-mail</option>
          <option value="cellNumber">Num. de celular</option>
          <option value="randomKey">Chave aleatória</option>
        </Form.Select>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          onChange={enteredPixKeyHandler}
        >
          <Form.Label className="mt-3">
            {showTxt ? showTxt : "Qual seu ..."}
          </Form.Label>
          <Form.Control
            value={pixKey}
            type="text"
            placeholder={placeHolderTxt ? placeHolderTxt : "Seu ..."}
          />
        </Form.Group>
        <p>Escolha qual conta você quer vincular esta chave</p>
        <Form.Select value={accountType} aria-label="as" onChange={selectedAcountTypeHandler}>
          <option>Tipo de conta</option>
          <option value="contaCorrente">Conta-Corrente</option>
          <option value="contaPoupanca">Conta-Poupança</option>
        </Form.Select>
        <Button type="submit" className="mt-3" variant="primary">
          Cadastrar
        </Button>
        <Button className="mt-3" variant="danger">
          Cancelar
        </Button>
      </Form>
    </div>
  );
};

export default SetPixKeyForm;

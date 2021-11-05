import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SetPixKeyForm from "./SetPixKeyForm";
import { registertPixKey } from "../../store/pix-actions";

import classes from "./SetPixKey.module.css";

import { Alert } from "react-bootstrap";

const SetPixKey = () => {
  const message = useSelector((state) => state.ui.message);
  console.log(message);

  const dispatch = useDispatch();

  const submitAddPixHandler = (pixData) => {
    dispatch(registertPixKey(pixData));
  };
  return (
    <>
      <div className={classes.message}>
        {message && <Alert variant={message.variant}>{message.message}</Alert>}
      </div>
      <SetPixKeyForm onSubmitPix={submitAddPixHandler} />
      <Link to="/">
        <p className={classes.icon}>PIX</p>
      </Link>
    </>
  );
};

export default SetPixKey;

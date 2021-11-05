import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {Button} from 'react-bootstrap';

import classes from "./PixKey.module.css";
import { fetchKeys } from "../../store/pix-actions";
import { clearKyes } from "../../store/pix-slice";
import PixKeyList from "./pixKeyList";

const PixKey = () => {
  const dispatch = useDispatch();
  const keys = useSelector((state) => state.pix.keys);

  useEffect(() => {
    dispatch(fetchKeys());
    return () => {
      dispatch(clearKyes());
    };
  }, []);

  return (
    <>
      <div className={classes.wrapper}>
        <h1>Minhas chaves</h1>
        {keys ? (
          <>
            <PixKeyList keys={keys} />
            <Button variant="primary"><Link to="setpixkey">Adicionar uma chave</Link></Button>{' '}
          </>
        ) : (
          <p style={{ textAlign: "center" }}>
            Voçê ainda não possui nenhuma chave pix cadastrada.{" "}
            <span>
              <Link to="setpixkey" style={{ color: "blue" }}>
                Clique aqui
              </Link>{" "}
              para casdastrar sua primeira chave.
            </span>
          </p>
        )}
      </div>
      <Link to="/">
        <p className={classes.icon}>PIX</p>
      </Link>
    </>
  );
};

export default PixKey;

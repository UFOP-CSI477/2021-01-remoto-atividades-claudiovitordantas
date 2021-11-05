import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { clearHistoric } from "../../store/pix-slice";

import { getAllTransactions } from "../../store/pix-actions";

import classes from "./PixKey.module.css";

export default function Historic() {
  const historic = useSelector((state) => state.pix.historic);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
    return () => {
      dispatch(clearHistoric());
    };
  }, []);

  return (
    <>
      {historic.length > 0 ? (
        <div className={classes.wrapper}>
          <h1>Histórico</h1>
          <ul>
            {historic.map((hist) => (
              <div key={hist._id}>
                <li>Tipo: {hist.name}</li>
                <li>Instituição: {hist.bank}</li>
                <li>Valor: {hist.value}</li>
                <li>Tipo de chave: {hist.keyType}</li>
                <li>Data: {moment(hist.date).format("LLL")}</li>
                <div className={classes.border}></div>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className={classes.wrapper}>
          <h1>Histórico</h1>
          <div className={classes.noTrans}>
            <h4>Você ainda não fez nenhuma transação</h4>
          </div>
        </div>
      )}
      <Link to="/">
        <p className={classes.icon}>PIX</p>
      </Link>
    </>
  );
}

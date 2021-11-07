import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCurrencies,
  fetchCurrencyOneQuotation,
  fetchCurrencyTwoQuotation,
  getLastQuotationValue,
} from "./state/actions";

import Currency from "./Currency";
import Result from "./Result";

const App = () => {
  const dispatch = useDispatch();

  const currencies = useSelector((state) => state.currency.currencies);

  const value = useSelector((state) => state.currency.value);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  // ULTIMA COTAÇÃO DA MOEDA DE ORIGEM
  const currencyOneQuotation = useSelector(
    (state) => state.currency.currencyOneQuotation
  );
  let currencyOneQuotationLast = getLastQuotationValue(currencyOneQuotation);

  // ULTIMA COTAÇÃO DA MOEDA DE DESTINO
  const currencyTwoQuotation = useSelector(
    (state) => state.currency.currencyTwoQuotation
  );
  let currencyTwoQuotationLast = getLastQuotationValue(currencyTwoQuotation);

  const convertionHandler = (data) => {
    dispatch(fetchCurrencyOneQuotation(data.currencyOne, data.formatedDate));
    dispatch(fetchCurrencyTwoQuotation(data.currencyTwo, data.formatedDate));
  };

  let res = (
    (currencyOneQuotationLast * value) /
    currencyTwoQuotationLast
  ).toFixed(4);

  return (
    <>
      <Currency onSubmitForm={convertionHandler} currencies={currencies} />
      <Result result={res} />
    </>
  );
};

export default App;

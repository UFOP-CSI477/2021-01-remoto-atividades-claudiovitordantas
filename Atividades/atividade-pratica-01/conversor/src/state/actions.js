import {
  setCurrOne,
  setCurrTwo,
  setCurrencies,
  setCurrencyTwoQuotation,
  setCurrencyOneQuotation,
} from "./currency-slice";

// PEFGAS AS MOEDAS E SIGLAS
export const fetchCurrencies = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado,tipoMoeda"
      );
      const data = await response.json();
      dispatch(setCurrencies(data.value));
    } catch (error) {
      console.log(error);
    }
  };
};

// PEGA A COTAÇÃO DA MOEDA DE ORIGEM
export const fetchCurrencyOneQuotation = (value, date) => {
  return async (dispatch) => {
    console.log(value, date);
    try {
      const response = await fetch(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${value}'&@dataCotacao='${date}'&$top=100&$format=json&$select=cotacaoCompra`
      );
      const data = await response.json();
      dispatch(setCurrencyOneQuotation(data.value));
    } catch (error) {
      console.log(error);
    }
  };
};

// PEGA A COTAÇÃO DA MOEDA DE DESTINO
export const fetchCurrencyTwoQuotation = (value, date) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${value}'&@dataCotacao='${date}'&$top=100&$format=json&$select=cotacaoCompra`
      );
      const data = await response.json();
      dispatch(setCurrencyTwoQuotation(data.value));
    } catch (error) {
      console.log(error);
    }
  };
};

export const conversionResult = (from, to, value) => {
  let result = (value * from) / to;
  return result.toFixed(4);
};

//PEGA A ULTIMA COTAÇÃO
export const getLastQuotationValue = (cotation) => {
  let formatedCotation = [];
  for (let key in cotation) {
    formatedCotation.push(cotation[key].cotacaoCompra);
  }
  return formatedCotation[formatedCotation.length - 1];
};

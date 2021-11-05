import { setMessage } from "./ui-slice";
import { setKeys, setBankInfo, setHistoric } from "./pix-slice";

export const registertPixKey = ({ pixKey, accountType, keyType }) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/registerPix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pixKey,
          accountType,
          keyType,
        }),
      });
      const data = await response.json();
      if (data.status === 200) {
        dispatch(
          setMessage({
            variant: "success",
            message: "Pix cadastrado com sucesso!",
          })
        );
      } else {
        dispatch(
          setMessage({
            variant: "danger",
            message: "Chave Pix já cadastrada!",
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchKeys = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/mykeys");
      const data = await response.json();
      let loadedKeys = [];

      for (const key in data) {
        loadedKeys.push({
          id: key,
          key: data[key].pixKey,
          accountType: data[key].accountType,
          keyType: data[key].keyType,
        });
      }
      dispatch(setKeys(loadedKeys));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchBankInfo = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://brasilapi.com.br/api/banks/v1");
      const data = await response.json();
      let load = [];
      for (let key in data) {
        load.push({
          name: data[key].fullName,
          id: key,
        });
      }
      dispatch(setBankInfo(load));
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerTransaction = ({
  value,
  bank,
  date,
  key,
  keyType,
  name,
}) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value,
          bank,
          date,
          key,
          keyType,
          name,
        }),
      });

      dispatch(
        setMessage({
          variant: "success",
          message: "Transação realizada com sucesso!",
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllTransactions = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/allTransaction");
      const data = await response.json();
      dispatch(setHistoric(data));
    } catch (error) {
      console.log(error);
    }
  };
};

import classes from "./PixKey.module.css";

const PixKeyList = (props) => {
  return props.keys.map((key) => (
    <>
      <p>{key.key}</p>
      <p>{key.accountType}</p>
      <p>{key.keyType}</p>
      <div className={classes.border}></div>
    </>
  ));
};

export default PixKeyList;

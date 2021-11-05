import { Link } from "react-router-dom";
// import DatePicker from "react-datepicker";

import classes from "./PixHome.module.css";

const PixHome = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <h1>PIX</h1>
        <div className={classes.options}>
          <p>
            <Link to="/pixtransfer">Transferir</Link>
          </p>
          <p>
            <Link to="/pixrecieve">Receber</Link>
          </p>
          <p>
            <Link to="/pixkeys">Minhas chaves</Link>
          </p>
          <p>
            <Link to="/historic">Histórico</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default PixHome;

import "./result.css";

const Result = (props) => {
  let res = props.result;
  return (
    <>
      <div className="title">
        <h4>Resultado da conversão</h4>
        {isNaN(res) ? "" : <h1>{res}</h1>}
      </div>
    </>
  );
};

export default Result;

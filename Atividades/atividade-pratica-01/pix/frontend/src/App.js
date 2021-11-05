import { Route, Switch } from "react-router-dom";

import PixHome from "./components/pixHome/PixHome";
import PixTransfer from "./components/pixTransfer/PixTransfer";
import PixKey from "./components/pixKey/PixKey";
import SetPixKey from "./components/pixKey/SetPixKey";
import Historic from "./components/pixKey/Historic";
import PixReviece from "./components/pixRecieve/PixRecieve";

function App() {
  return (
    <Switch>
      <Route path="/" component={PixHome} exact />
      <Route path="/pixtransfer" component={PixTransfer} exact />
      <Route path="/pixrecieve" component={PixReviece} exact />
      <Route path="/pixkeys" component={PixKey} exact />
      <Route path="/setpixkey" component={SetPixKey} exact />
      <Route path="/historic" component={Historic} exact />
    </Switch>
  );
}

export default App;

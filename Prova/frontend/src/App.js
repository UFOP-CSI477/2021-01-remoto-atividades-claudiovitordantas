import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginSreen";
import AdminDashboard from "./screens/AdminDashboard";
import PeopleScreen from "./screens/PeopleScreen";
import Registers from "./screens/Registers";
import InclusionScreen from "./screens/InclusionScreen";
import RegisterPeople from "./screens/RegisterPeople";
import UnitsScreen from "./screens/UnitsScreen";
import VaccinesScreen from "./screens/VaccinesScreen";
import DataScreen from "./screens/DataScreen";

function App() {
  const admin = useSelector((state) => state.admin);
  console.log(admin.isLogged)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/login"
          element={
            admin.isLogged ? <Navigate to="/dashboard" /> : <LoginScreen />
          }
        />
        <Route
          path="/dashboard"
          element={admin.isLogged ? <AdminDashboard /> : <LoginScreen />}
        />
        <Route
          path="/pessoas"
          element={admin.isLogged ? <PeopleScreen /> : <LoginScreen />}
        />
        <Route
          path="/pessoas/cadastro"
          element={admin.isLogged ? <RegisterPeople /> : <LoginScreen />}
        />
        <Route
          path="/registros"
          element={admin.isLogged ? <Registers /> : <LoginScreen />}
        />
        <Route
          path="/registros/inclusao"
          element={admin.isLogged ? <InclusionScreen /> : <LoginScreen />}
        />
        <Route
          path="/unidades"
          element={admin.isLogged ? <UnitsScreen /> : <LoginScreen />}
        />
        <Route
          path="/vacinas"
          element={admin.isLogged ? <VaccinesScreen /> : <LoginScreen />}
        />
        <Route path="/dados-gerais" element={<DataScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

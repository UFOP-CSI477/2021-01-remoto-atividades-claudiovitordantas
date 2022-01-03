import { Route, Routes, BrowserRouter, Navigate  } from "react-router-dom";
import { useSelector } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import LoginSreen from "./screens/LoginSreen";
import AdminDashboard from "./screens/AdminDashboard";
import PeopleScreen from "./screens/PeopleScreen";
import Registers from "./screens/Registers";
import InclusionScreen from "./screens/InclusionScreen";
import RegisterPeople from "./screens/RegisterPeople";
import UnitsScreen from "./screens/UnitsScreen";
import VaccinesScreen from "./screens/VaccinesScreen";

function App() {
  const admin = useSelector((state) => state.admin);
  console.log(admin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
        
          path="/login"
          element={admin.isLogged ? <Navigate to="/dashboard" /> : <LoginSreen />}
        />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/pessoas" element={<PeopleScreen />} />
        <Route path="/pessoas/cadastro" element={<RegisterPeople />} />
        <Route path="/registros" element={<Registers />} />
        <Route path="/registros/inclusao" element={<InclusionScreen />} />
        <Route path="/unidades" element={<UnitsScreen />} />
        <Route path="/vacinas" element={<VaccinesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

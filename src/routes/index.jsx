import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Alunos from "../pages/Alunos";
import Dashboard from "../pages/Dashboard";
import Escolas from "../pages/Escolas";
import Login from "../pages/Login";
import Responsaveis from "../pages/Responsaveis";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />

                {/* Private Routes */}
                <Route path="/" element={<PrivateRoute>
                    <Dashboard />
                </PrivateRoute>} />

                <Route path="/alunos" element={<PrivateRoute>
                    <Alunos />
                </PrivateRoute>} />

                <Route path="/escolas" element={<PrivateRoute>
                    <Escolas />
                </PrivateRoute>} />

                <Route path="/responsaveis" element={<PrivateRoute>
                    <Responsaveis />
                </PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
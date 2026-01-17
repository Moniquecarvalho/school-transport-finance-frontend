import { BrowserRouter, Routes, Route } from "react-router-dom";

import Rotas from "../pages/Rotas";
import Mensalidades from "../pages/Mensalidades";
import Despesas from "../pages/Despesas";
import Emergencia from "../pages/Emergencia";
import Vistorias from "../pages/Vistorias";
import Configuracoes from "../pages/Configuracoes";

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
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/alunos"
                    element={
                        <PrivateRoute>
                            <Alunos />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/escolas"
                    element={
                        <PrivateRoute>
                            <Escolas />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/responsaveis"
                    element={
                        <PrivateRoute>
                            <Responsaveis />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/rotas"
                    element={
                        <PrivateRoute>
                            <Rotas />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/mensalidades"
                    element={
                        <PrivateRoute>
                            <Mensalidades />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/despesas"
                    element={
                        <PrivateRoute>
                            <Despesas />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/emergencia"
                    element={
                        <PrivateRoute>
                            <Emergencia />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/vistorias"
                    element={
                        <PrivateRoute>
                            <Vistorias />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/configuracoes"
                    element={
                        <PrivateRoute>
                            <Configuracoes />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
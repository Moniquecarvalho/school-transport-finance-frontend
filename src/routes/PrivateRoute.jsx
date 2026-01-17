import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const isAuthenticated = Boolean(localStorage.getItem("token"));

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default PrivateRoute;
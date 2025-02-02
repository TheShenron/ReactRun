import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const PrivateRoutes = () => {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
};

export default PrivateRoutes;

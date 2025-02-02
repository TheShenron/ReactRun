import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const PublicRoutes = () => {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

    return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoutes;

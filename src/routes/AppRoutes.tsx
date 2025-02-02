import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </Router>
    )
};

export default AppRoutes;

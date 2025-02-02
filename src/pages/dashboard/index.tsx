import { Button, Container, Typography } from "@mui/material";
import { logout } from "../../store/slices/authSlices";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h4">Dashboard</Typography>
            <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 2 }}>
                Logout
            </Button>
        </Container>
    );
};

export default Dashboard;

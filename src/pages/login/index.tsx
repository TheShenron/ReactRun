import { Button, Container, TextField, Typography, Paper } from "@mui/material";
// import { useAppDispatch } from "../store/hooks";
import { login } from '../../store/slices/authSlices'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login())
        navigate("/dashboard");
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, textAlign: "center", marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <TextField fullWidth label="Email" margin="normal" variant="outlined" />
                <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" />
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
                    Login
                </Button>
            </Paper>
        </Container>
    );
};

export default Login;

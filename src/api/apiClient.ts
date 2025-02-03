import axios from "axios";
import { store } from "../store/store"; // Import your Redux store
import { logout } from "../store/slices/authSlices"; // Import Redux actions

export const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" },
});

// Request Interceptor: Attach Token from Redux Store
apiClient.interceptors.request.use(
    (config) => {
        // const token = store.getState().auth.token; // Get token from Redux store
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle Errors & Update Redux
apiClient.interceptors.response.use(
    (response) => {
        // Example: Update user details in Redux after a successful response
        if (response.data.user) {
            //   store.dispatch(setUser(response.data.user));
        }
        return response;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.warn("Unauthorized! Logging out...");
                store.dispatch(logout()); // Dispatch logout action
                window.location.href = "/login"; // Redirect to login
            } else if (error.response.status === 403) {
                console.warn("Forbidden! You don’t have permission.");
            } else if (error.response.status === 500) {
                console.error("Server error! Try again later.");
            }
        }
        return Promise.reject(error);
    }
);

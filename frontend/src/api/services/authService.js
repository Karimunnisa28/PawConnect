import API from "../config";

export const authService = {
    login: (credentials) => API.post("/users/login", credentials),
    register: (userData) => API.post("/users/register", userData),
    logout: () => localStorage.removeItem("token"),
    getCurrentUser: () => API.get("/users/me")
};

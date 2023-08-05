import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';

// Define an interface for the decoded JWT payload
interface DecodedToken extends JwtPayload {
    exp: number;
}

// This is your axios instance for API calls
export const api = axios.create({
    baseURL: 'http://localhost:3000/users', // Replace with your API endpoint
    timeout: 5000,
});

// This function will get called before each request
api.interceptors.request.use(async config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        // Check if token is expired
        const decodedToken = jwtDecode<DecodedToken>(token);
        if (Date.now() >= decodedToken.exp * 1000) {
            // Token is expired, refresh the token
            const response = await axios.post('http://localhost:3000/users/refresh', { refreshToken: localStorage.getItem('refreshToken') });
            if (response.status === 200) {
                localStorage.setItem('accessToken', response.data.accessToken);
                config.headers.Authorization = `${response.data.accessToken}`;
            }
        } else {
            config.headers.Authorization = `${token}`;
        }
    }
    return config;
});

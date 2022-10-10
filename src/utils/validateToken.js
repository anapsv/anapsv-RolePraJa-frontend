import { accessFeed } from "../services/authService";

export async function checkToken(navigate, setToken, page) {
    const tokenStorage = localStorage.getItem("token");
    localStorage.removeItem("username");

    if (tokenStorage) {
        const auth = {
            headers: {
                Authorization: `Bearer ${tokenStorage}`
            }
        }
        const response = await accessFeed(auth);

        if (response) {
            setToken(tokenStorage);
            navigate(`/${page}`);
        } else {
            localStorage.removeItem("token");
            navigate('/');
        }
    } else {
        navigate('/');
    }
}
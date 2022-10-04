import styled from "styled-components";
import { useState, useContext } from "react";
import { loginUser } from "../services/authService";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../utils/validateToken";
import Input from "../shared/Input";

export default function SignIn() {

    const { setToken } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();
        setLoading(true);

        const userData = { username, password };

        const response = await loginUser(userData);

        if (response) {
            setToken(response.token);
            localStorage.setItem("token", response.token);
            checkToken(navigate, setToken)
            // navigate("/feed");
        } else {
            setLoading(false);
        }
    }

    return (
        <>
            <Form onSubmit={ login }>
                <Input type="text" placeholder="seu username ou email" disabled={ loading } value={ username } onChange={ (e) => setUsername(e.target.value) } />
                <Input type="password" placeholder="senha" disabled={ loading } value={ password } onChange={ (e) => setPassword(e.target.value) } />
                <Button type="submit" disabled={ loading }>entrar</Button>
            </Form>
        </>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const Button = styled.button`
    width: 30%;
    height: 40px;
    background-color: #6363631c;
    border: none;
    border-radius: 8px;
    color: #f08b08;
`
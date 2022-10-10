import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/authService";
import Input from "../shared/Input";
import Spinner from "../shared/Spinner";

export default function SignUp() {

    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const navigate = useNavigate();

    async function registerUser(e) {
        e.preventDefault();
        setLoading(true);

        const userData = { username, email, password, passwordConfirmation };

        const response = await createUser(userData);
        if (response === 201) {
            navigate("/");
        } else {
            setLoading(false);
            alert(response)
        }
    }

    return (
        <>
            <Form onSubmit={ registerUser }>
                <Input type="text" placeholder="escolha um username beeeem legal" disabled={ loading } value={ username } onChange={ (e) => setUsername(e.target.value) } />
                <Input type="email" placeholder="email" disabled={ loading } value={ email } onChange={ (e) => setEmail(e.target.value) } />
                <Input type="password" placeholder="senha" disabled={ loading } value={ password } onChange={ (e) => setPassword(e.target.value) } />
                <Input type="password" placeholder="confirme sua senha" value={ passwordConfirmation } onChange={ (e) => setPasswordConfirmation(e.target.value) } />
                { loading ? (<Spinner />) : <Button type="submit" disabled={ loading }>cadastrar</Button> }
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

    @media (max-width: 361px) {
        margin-top: 33px;
    }
`
const Button = styled.button`
    width: 30%;
    height: 40px;
    background-color: #6363631c;
    border: none;
    border-radius: 8px;
    color: #f08b08;
`
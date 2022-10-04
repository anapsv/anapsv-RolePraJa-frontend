import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignIn from "../components/SignInForm";
import { checkToken } from "../utils/validateToken";
import { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);

    useEffect(() => {
        // const page = "feed";
        checkToken(navigate, setToken);
    }, []);

    return (
        <>
            <Header />
            <SubTitle>faça login pra achar seu rolé rapidão!</SubTitle>
            <SignIn />
            <AditionalText>ainda não tem um cadastro? <Direct to="/signup">faça aqui!</Direct></AditionalText>
            <Footer />
        </>
    );
}


const SubTitle = styled.p`
    font-family: 'Cairo Play', cursive;
    font-size: 32px;
    font-weight: 200;
    color: #f08b08;
    margin-bottom: 30px;
    text-align: center;
`

const AditionalText = styled.p`
    font-family: 'Cairo Play', cursive;
    font-size: 20px;
    font-weight: 200;
    color: #f08b08;
    text-align: center;
    margin-top: 30px;
`
const Direct = styled(Link)`
    font-family: 'Cairo Play', cursive;
    font-size: 20px;
    font-weight: 200;
    color: #f08b08;
    text-align: center;
    margin-top: 30px;
    text-decoration: none;
`
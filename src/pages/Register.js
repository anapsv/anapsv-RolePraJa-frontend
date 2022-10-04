import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUp from "../components/RegisterForm";
import { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { checkToken } from "../utils/validateToken";

export default function Register() {
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const tokenStorage = localStorage.getItem("token");

    useEffect(() => {
        if (tokenStorage) {
            const page = "feed";
            checkToken(navigate, setToken, page);
        }
    }, []);

    return (
        <>
            <Header />
            <SubTitle>faça seu cadastro e encontre um rolé com a sua cara!</SubTitle>
            <SignUp />
            <AditionalText>já tem um cadastro? oops, então <Direct to="/">faça login aqui!</Direct></AditionalText>
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
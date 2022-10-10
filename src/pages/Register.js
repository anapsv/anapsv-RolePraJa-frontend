import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUp from "../components/RegisterForm";
import { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { checkToken } from "../utils/validateToken";
import { TbArrowLoopLeft2 } from 'react-icons/tb';
import { IconContext } from "react-icons";

export default function Register() {
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const tokenStorage = localStorage.getItem("token");

    useEffect(() => {
        if (tokenStorage) {
            const page = "feed";
            checkToken(navigate, setToken, page);
        }
    });

    return (
        <>
            <Header />
            <SubTitle>faça seu cadastro e encontre um rolé com a sua cara!</SubTitle>
            <SignUp />
            <AditionalText>eita, já tem um cadastro? <Direct to="/">clica aqui!</Direct> <IconContext.Provider value={ { color: "#5CFFB7A2", } }> <TbArrowLoopLeft2 /> </IconContext.Provider> </AditionalText>
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

    @media (max-width: 376px) {
        font-size: 21px;
        margin-top: 55px;
    }
`
const AditionalText = styled.p`
    font-family: 'Cairo Play', cursive;
    font-size: 20px;
    font-weight: 200;
    color: #f08b08;
    text-align: center;
    margin-top: 30px;

    @media (max-width: 376px) {
        margin-top: 16px;
        text-align: start;
        margin-left: 28px;
    }
`
const Direct = styled(Link)`
    font-family: 'Cairo Play', cursive;
    font-size: 20px;
    font-weight: 200;
    color: #f08b08;
    text-align: center;
    margin-top: 30px;
    text-decoration: none;

    @media (max-width: 376px) {
        margin-top: 5px;
    }
`
// const Arrow = styled(TbArrowLoopLeft2)`
//     font-size: 23px;
//     color: #5CFFB7A2;
//     position: absolute;
//     left: 66%;
//     bottom: 293px;

//     @media (max-width: 361px) {
//         left: 89%;
//         bottom: 21%;
//         font-size: 20px;
//     }
// `
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignIn from "../components/SignInForm";
import { checkToken } from "../utils/validateToken";
import { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { TbArrowLoopLeft2 } from 'react-icons/tb';
import { IconContext } from 'react-icons';

export default function Login() {
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);

    useEffect(() => {
        const page = "feed";
        checkToken(navigate, setToken);
    });

    return (
        <>
            <Header />
            <SubTitle>faça login pra achar seu rolé rapidão!</SubTitle>
            <SignIn />
            <AditionalText>ainda não tem cadastro?? <Direct to="/signup">corre fazer!</Direct> <IconContext.Provider value={ { color: "#5CFFB7A2", } }> <TbArrowLoopLeft2 /> </IconContext.Provider> </AditionalText>
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
        margin-top: 49px;
        text-align: start;
        margin-left: 15px;
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
//     position: fixed;
//     left: 66%;
//     bottom: 293px;

//     @media (max-width: 361px) {
//         left: 90%;
//         bottom: 201px;
//         font-size: 20px;
//     }
// `
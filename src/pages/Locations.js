import styled from "styled-components";
import HeaderFeed from "../components/HeaderFeed";
import FooterFeed from '../components/FooterFeed';
import Places from "../components/Places";
import FavoritePlaces from "../components/Favorites";
import NewPost from "../components/NewPostForm";
import { useState } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Feed() {

    const [showLocations, setShowLocations] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const [buttonLocations, setButtonLocations] = useState(false);
    const [buttonFavorites, setButtonFavorites] = useState(false);
    const [newPost, setNewPost] = useState(false);
    const [buttonAddPost, setButtonAddPost] = useState(false);
    const [showPosts, setShowPosts] = useState(false);
    const navigate = useNavigate();

    function updateNewPostState() {
        setNewPost(!newPost);
        if (showFavorites === true) {
            setShowFavorites(false);
        }
        if (showLocations === true) {
            setShowLocations(false);
        }
    }

    function updateShowLocationsState() {
        setShowLocations(!showLocations);
        if (showFavorites === true) {
            setShowFavorites(false);
        }
        if (newPost === true) {
            setNewPost(false);
        }
    }

    function updateShowFavoritesState() {
        setShowFavorites(!showFavorites);
        if (showLocations === true) {
            setShowLocations(false);
        }
        if (newPost === true) {
            setNewPost(false);
        }
    }

    function activateButtonLocations() {
        setButtonLocations(!buttonLocations);
        if (buttonFavorites === true) {
            setButtonFavorites(false);
        }
        if (buttonAddPost === true) {
            setButtonAddPost(false);
        }
        navigate('/locations');
    }

    function activateButtonFavorites() {
        setButtonFavorites(!buttonFavorites);
        if (buttonLocations === true) {
            setButtonLocations(false);
        }
        if (buttonAddPost === true) {
            setButtonAddPost(false);
        }
    }

    function activateButtonAddPost() {
        setButtonAddPost(!buttonAddPost);
        if (buttonFavorites === true) {
            setButtonFavorites(false);
        }
        if (buttonLocations === true) {
            setButtonLocations(false);
        }
    }
    function updateShowPosts() {
        setShowPosts(!showPosts);
        if (showFavorites === true) {
            setShowFavorites(false);
        }
        if (showLocations === true) {
            setShowLocations(false);
        }
        if (newPost === true) {
            setNewPost(false);
        }
        navigate('/feed');
    }

    return (
        <>
            <ButtonContainer>
                <Logo src={ require("../assets/logoRolePraJa.png") } onClick={ () => { updateShowPosts() } }></Logo>
                <AddPost buttonAddPost={ buttonAddPost } onClick={ () => { updateNewPostState(); activateButtonAddPost(); } }><BsPlusSquareDotted /></AddPost>
                <Locations buttonLocations={ buttonLocations } onClick={ () => { updateShowLocationsState(); activateButtonLocations(); } }>perto de você</Locations>
                <Favorites buttonFavorites={ buttonFavorites } onClick={ () => { updateShowFavoritesState(); activateButtonFavorites(); } }>eventos</Favorites>
            </ButtonContainer>
            <HeaderFeed />
            <Container>
                { showLocations ? <Places display={ true } /> : null }
                { showFavorites ? <FavoritePlaces display={ true } /> : null }
                { newPost ? <NewPost display={ true } /> : null }
            </Container>
            <FooterFeed />
        </>
    );
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 75%;
`

const Logo = styled.img`
    width: 8%;
    position: fixed;
    top: 6%;
    left: 6%;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    height: 100%;
    background-color: #2b2b2b;
    border-radius: 15px 0 0 0;
    position: fixed;
    top: 62%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-x: scroll;
    padding-top: 150px;

    @media (max-width: 361px) {
        height: 96%;
    }
`
const AddPost = styled.button`
    width: 10%;
    height: 38px;
    position: fixed;
    top: 74px;
    left: 18%;
    background-color: ${props => (props.buttonAddPost ? `#2b2b2b` : `rgba(78, 78, 78, 0.096)`)};
    color: #F02308;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    text-align: center;
    border: none;
    padding-top: 5px;
    font-size: 20px;
`

const Locations = styled.button`
    width: 30%;
    height: 38px;
    position: fixed;
    top: 74px;
    left: 30%;
    background-color: ${props => (props.buttonLocations ? `#2b2b2b` : `rgba(78, 78, 78, 0.096)`)};
    font-family: 'Viga', sans-serif;
    color: #F02308;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    text-align: center;
    border: none;
    padding-bottom: 10px;
    font-size: 20px;

    @media (max-width: 361px) {
        font-size: 13px;
        left: 32%;
        top: 69px;
        padding-bottom: 1px;
    }
`

const Favorites = styled.button`
    width: 30%;
    height: 38px;
    position: fixed;
    top: 74px;
    left: 65%;
    background-color: ${props => (props.buttonFavorites ? `#2b2b2b` : `rgba(78, 78, 78, 0.096)`)};
    font-family: 'Viga', sans-serif;
    color: #F02308;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    text-align: center;
    border: none;
    padding-bottom: 10px;
    font-size: 20px;

    @media (max-width: 361px) {
        font-size: 13px;
        left: 62%;
        width: 33%;
        top: 69px;
        line-height: 13px;
        padding-bottom: 1px;
    }
`
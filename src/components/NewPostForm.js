import styled from "styled-components";
import { createPost } from "../services/postService";
import { useState } from 'react';
import Spinner from '../shared/Spinner';

export default function NewPost() {

    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    async function addPost(e) {
        e.preventDefault();
        setLoading(true);

    }

    return (
        <>
            <NewPostForm onSubmit={ addPost }>
                <NewPostInput type="text" placeholder="como está o rolé aí? o que está tocando? tá animado? cheio?" value={ content } disabled={ loading } onChange={ (e) => setContent(e.target.value) } />
                { loading ? (<Spinner />) : <Button type="submit" disabled={ loading }>postar</Button> }
            </NewPostForm>
        </>
    );

}

const NewPostForm = styled.form`
    width: 70%;
    height: 30%;
`
const NewPostInput = styled.input`
    width: 100%;
    height: 50%;
    background-color: #6363631c;
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    outline: none;
    font-weight: bold;
    font-family: 'Viga', sans-serif;
    font-size: 18px;
    padding-left: 10px;
`
const Button = styled.button`
    width: 13%;
    height: 25%;
    background-color: #20EB7B66;
    border: none;
    border-radius: 8px;
    font-family: 'Viga', sans-serif;
    font-weight: bold;
    font-size: 15px;
    margin-top: 20px;
`
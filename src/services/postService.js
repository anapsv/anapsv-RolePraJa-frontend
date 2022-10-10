import axios from "axios";

export async function getPosts(params) {
    
}

export async function createPost(body, auth) {
    return axios
        .post('http://localhost:5000/newpost', body, auth)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err.response.data);
        });
}
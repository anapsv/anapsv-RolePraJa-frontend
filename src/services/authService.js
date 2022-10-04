import axios from "axios";

export async function createUser(body) {
    return axios.post('http://localhost:5000/signup', body)
        .then((res) => {
            return res.status;
        })
        .catch((err) => {
            return err.response.data;
        });
}

export async function loginUser(body) {
    return axios.post('http://localhost:5000/signin', body)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err.response.data);
        });
}

export async function accessFeed(config) {
    return axios
        .get('http://localhost:5000/feed', config)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err.response.data);
        });
}
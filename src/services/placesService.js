import axios from "axios";

const URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAIi1qk9xRdgBS1lV5Ju-O1tEnDfBz9Vjg';

const options = {
    location: { latitude: 51.507307, longitude: -0.08114},
    radius: '4000',
    type: 'bar', 
    headers: 'Access-Control-Allow-Origin: *'
};

export async function getPlacesData() {
    try {

        const response = await axios
            .get(URL, options)

        return response;
    } catch (error) {
        console.log(error);
    }
}
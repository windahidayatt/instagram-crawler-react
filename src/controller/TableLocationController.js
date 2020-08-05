import axios from 'axios';
import {BASE_URL, GOOGLE_URL, KEY_GOOLE_URL} from '../config/URL'

const GET_API_HASHTAG = BASE_URL + '/explore/tags/';
const GET_GOOGLE_API_MAPS = GOOGLE_URL;
const GET_GOOGLE_API_MAPS_KEY = KEY_GOOLE_URL;

export const GET_LIST_FROM_HASHTAG = (hashtag) => {
    return axios
        .get(GET_API_HASHTAG + hashtag + '?__a=1')
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

// export const GET_LIST_ACCESSIBILITY_CAPTION = (hashtag) => {
//     return axios
//         .get(GET_API_HASHTAG + hashtag + '?__a=1')
//         .then(response => {
//             let data = response.data.graphql.hashtag.edge_hashtag_to_media
//             return data
//         })
//         .catch(err => {
//             return err.response
//         })
// }

export const GET_LIST_ACCESSIBILITY_CAPTION = (hashtag, end_cursor) => {
    return axios
        .get(GET_API_HASHTAG + hashtag + '?__a=1&max_id=' + end_cursor)
        .then(response => {
            let data = response.data.graphql.hashtag.edge_hashtag_to_media
            console.log(end_cursor)
            // console.log(data.edges)
            // console.log(GET_API_HASHTAG + hashtag + '?__a=1&max_id=' + end_cursor)
            return data
        })
        .catch(err => {
            return err.response
        })
}

export const GET_LATITUDE_LONGITUDE = (location) => {
    return axios
        .get(GET_GOOGLE_API_MAPS + "address=" + location + "&key=" + GET_GOOGLE_API_MAPS_KEY)
        .then(res => {
            let data = res.data.results[0].geometry.location
            return data;
        })
        .catch(err => {
            return err.response
        })
}

export const GET_LIST_ACCESSIBILITY_CAPTION_NEXT_PAGE = (hashtag, end_cursor) => {
    return axios
        .get(GET_API_HASHTAG + hashtag + '?__a=1&max_id=' + end_cursor)
        .then(response => {
            let data = response.data.graphql.hashtag.edge_hashtag_to_media
            return data
        })
        .catch(err => {
            return err.response
        })
}

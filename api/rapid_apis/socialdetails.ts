import axios from 'axios';

const getSocialData = async (url: string) => {

    const options = {
        method: 'GET',
        url: 'https://website-social-scraper-api.p.rapidapi.com/contacts/',
        params: {
            website: url
        },
        headers: {
            'X-RapidAPI-Key': '77fda6d5b5msha6dec97b1da1a89p11fa38jsnac6b2ee6fccf',
            'X-RapidAPI-Host': 'website-social-scraper-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default getSocialData;
import axios from 'axios';


const fetchData = async (tweetId: string) => {

    const options = {
        method: 'GET',
        url: 'https://twitter-api45.p.rapidapi.com/tweet.php',
        params: {
            id: tweetId
        },
        headers: {
            'X-RapidAPI-Key': '77fda6d5b5msha6dec97b1da1a89p11fa38jsnac6b2ee6fccf',
            'X-RapidAPI-Host': 'twitter-api45.p.rapidapi.com'
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

export default fetchData;
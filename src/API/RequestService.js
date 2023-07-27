import axios from "axios";


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5679bb92b8msh43d1d05f9a2dcb5p1fe085jsncebf244ff403',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
    }
};

export class RequestService {
    static async getAllGames() {
        try {
            const response = await axios.get('https://mmo-games.p.rapidapi.com/games', options)
            return response;
        }
        catch (error) {
            return error;
        }
    }
}
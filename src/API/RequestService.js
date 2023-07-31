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
            const response = await axios.get('https://mmo-games.p.rapidapi.com/games', options)
            return response;
    }

    static async getSpecificGame(id) {
      
            const response = await axios.get('https://mmo-games.p.rapidapi.com/game',
                {
                    headers: options.headers,
                    method: options.method,
                    params: {
                        id: id
                    }
                }
            )
            return response;
    }

    static async getSortedGames(sortBy) {
     
            const response = await axios.get('https://mmo-games.p.rapidapi.com/games',
                {
                    headers: options.headers,
                    method: options.method,
                    params: {
                        'sort-by': sortBy
                    }
                }
            )
            return response;
    }



}
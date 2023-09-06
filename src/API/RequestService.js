import axios from "axios";


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5679bb92b8msh43d1d05f9a2dcb5p1fe085jsncebf244ff403',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

export class RequestService {

    static async getAllGames(sortBy) {

        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
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

    static async getGamesByPlatform(platform) {

        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
            {
                headers: options.headers,
                method: options.method,
                params: {
                    platform: platform,
                }
            }
        )
        return response;
    }

    static async getFilteredGames(params) {

        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/filter',
            {
                headers: options.headers,
                method: options.method,
                params: params,
            }
        )
        return response;
    }


    static async getSpecificGame(id) {

        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/game',
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

}
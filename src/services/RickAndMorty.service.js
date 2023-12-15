import { API_RM } from "../constants/Api.constants";

class RickAndMortyService {

    async getAllCharacter(){
        const response = await fetch(API_RM.CHARACTERS());
        //Interceptor
        return response.json();
    }

    async getCharacterById(){
        const response = await fetch(API_RM.CHARACTER_BY_ID());
        //Interceptor
        return response.json();
    }


}

export default new RickAndMortyService();
import axios from 'axios';
import { BASE_URL } from '../constant';

export const populateMeetingMinutes = async () => {
    try{
        const response = await axios.get(`${BASE_URL}meetings`);
        return response.data;
    }catch{
        console.error("Error populating meeting minutes");
        return null;
    }
};

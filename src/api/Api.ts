import axios from 'axios';
import { BASE_URL } from '../constant';

export const populateMeetingMinutes = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/meetings`);
        return response.data;
    }catch{
        console.error("Error populating meeting minutes");
        return null;
    }
};

export const getLatestHeadline = async () => {
  try{
    const response = await axios.get(`${BASE_URL}`);
    return response.data?.news ?? null;
  }catch{
    console.error("Error getting latest headline");
    return null;
  }
}

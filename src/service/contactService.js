import Axios from 'axios';
import { env } from '../configs/envConfig';

export const sendContactMessage = async (contactData) => {
    try {
        const response = await Axios.post(`${env.serviceStatusAPI}/api/contact`, contactData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
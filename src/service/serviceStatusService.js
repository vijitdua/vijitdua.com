import Axios from 'axios';
import { env } from "../configs/envConfig";

export const getServices = async () => {
    try {
        const response = await Axios.get(`${env.serviceStatusAPI}/api/status`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

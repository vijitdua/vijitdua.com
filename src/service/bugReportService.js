import Axios from "axios";
import {env} from "../configs/envConfig";


export const submitBugReport = async (serviceId, description, email) => {
    try {
        const data = {
            serviceId,
            description,
            email,
        };
        const response = await Axios.post(`${env.serviceStatusAPI}/api/bug`, data);
        return response.data;
    } catch (error) {
        console.error('Error submitting bug report:', error);
        throw error;
    }
};
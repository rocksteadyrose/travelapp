import axios from "axios";
import Auth from './Auth';

export default {

    //TRAVEL
    findAllTravel: (userId) => {
        return axios.get(`/api/calendar/${userId}`, {
            headers: {
                'Authorization': `Bearer ${Auth.getToken()}`,
            },
        });
    },
    createTravel: (travelData) => {
        return axios.post("/api/travel/form", travelData, {
            headers: {
                'Authorization': `Bearer ${Auth.getToken()}`,
            },
        });
    },

    findOneTravel: (travelId) => {
        return axios.get(`/api/agenda/${travelId}`, {
            headers: {
                'Authorization': `Bearer ${Auth.getToken()}`,
            },
        })
    },

    editTravel: (travelId, travelData) => {
        return axios.put(`/api/travel/${travelId}`, travelData)
    },

    deleteTravel: (travelId) => {
        return axios.delete(`/api/travel/${travelId}`)
    }

}

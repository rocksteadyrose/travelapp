import axios from "axios";
import Auth from './Auth';

export default {

    findAllTravel: () => {
        return axios.get(`/api/calendar/`, {
            headers: {
                'Authorization': `Bearer ${Auth.getToken()}`,
            },
        });
    },
    createTravel: (travelData) => {
        return axios.post("/api/travels", travelData, {
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
        return axios.put(`/api/agenda/${travelId}`, travelData, 
         {
        headers: {
            'Authorization': `Bearer ${Auth.getToken()}`,
        },
    });
    },


    deleteTravel: (travelId) => {
        return axios.delete(`/api/agenda/${travelId}`, {
            headers: {
                'Authorization': `Bearer ${Auth.getToken()}`,
            },
        });
    },

}

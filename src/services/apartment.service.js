import axios from "@/utils/axios";

export const getAllApartments = () => {
    return axios.get("/apartments")
}

export const getApartmentById = (id) => {
    return axios.get(`/apartments/${id}`)
}
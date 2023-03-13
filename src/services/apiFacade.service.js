import axios from "axios";
import { URL } from "../utils/constants/APIFacade.constants";

export const getRestaurantList = async () => {
    try {
        const apiUrl = `${URL}/restaurant`;
        const restaurants = await axios.get(apiUrl);
        if(!restaurants || restaurants?.data?.data?.length <= 0) {
            console.error("Data from backend is empty");
            throw new Error("Data not available");
        }
        const sortedList = restaurants.data.data.sort((a, b) => b.priority - a.priority);
        return sortedList;
    } catch(error) {
        console.log('Error occured while fetching restaurant list from backend: ', error.message);
    }
}

export const getRestaurantProducts = async (restaurantId) => {
    try {
        const apiUrl = `${URL}/restaurant/product?restaurantId=${restaurantId}`;
        const result = await axios.get(apiUrl);
        if(!result || result.data.data.length <= 0) {
            console.error("Data from backend is empty");
            throw new Error("Data not available");
        }

        console.log('restaurant products are : ', result.data.data);
        return result.data.data;
    } catch(error) {
        console.log('Error occured while fetching restaurant products from backend: ', error.message);
    }
}
export const getRestaurantDetails = async (restaurantId) => {
    try {
        const apiUrl = `${URL}/restaurant/single?restaurantId=${restaurantId}`;
        const result = await axios.get(apiUrl);
        if(!result.data.data) {
            console.error("Data from backend is empty");
            throw new Error("Data not available");
        }

        console.log('restaurant details are : ', result.data.data);
        return result.data.data;
    } catch(error) {
        console.log('Error occured while fetching restaurant details from backend: ', error.message);
    }
}
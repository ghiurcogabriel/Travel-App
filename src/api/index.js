import axios from "axios";



export const getPlacesData = async (type, sw, ne) => {
    try {
            const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
        },
        headers: {
            'X-RapidAPI-Key': 'ec08c63f78msheb589bbe32d52d3p16a396jsn0b9522db490d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    });
        
        return data;

    } catch (error) {
        console.log(error);
    }
}
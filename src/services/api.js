import axios from "axios";

const API_KEY = "IGGDUA2XY5BBSLTLV2HJERRCPH2HCEEBKUOS531XEECK2SDR";

// export const fetchRestaurants = async (lat, lng) => {
  
//   return [
//     {
//       fsq_id: "1",
//       name: "Sample Restaurant 1",
//       geocodes: { main: { latitude: lat + 0.01, longitude: lng + 0.01 } }
//     },
//     {
//       fsq_id: "2",
//       name: "Sample Restaurant 2",
//       geocodes: { main: { latitude: lat - 0.01, longitude: lng - 0.01 } }
//     }
//   ];
// }
 
  
 

export const fetchRestaurants = async (lat, lng) => {
  try {
    const response = await axios.get(
      "https://api.foursquare.com/v3/places/search",
      {
        headers: {
          Accept: "application/json",
          Authorization: API_KEY, // 
        },
        params: {
          ll: `${lat},${lng}`,
          query: "restaurant",
          radius: 2000,
          limit: 10,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error(
      "Foursquare API Error:",
      error.response?.data || error.message
    );
    return [];
  }
};


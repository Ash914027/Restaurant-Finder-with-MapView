
### 🍽️ Restaurant Finder with MapView  
📍 **Location-based mobile app to discover nearby restaurants**
<div style="display: flex; justify-content: space-around;margin: 10; border: 2 solid #ccc; border-radius: 8;">

<img src="https://github.com/user-attachments/assets/f64acb35-4238-46da-896a-fad45e37738d" alt="WhatsApp Image 2026-01-21 at 11 34 51 PM" width="300" height="800"/>
<img src="https://github.com/user-attachments/assets/8cc6fbde-ce11-4cfa-9da9-1d5d1c65ae12" alt="WhatsApp Image 2026-01-21 at 11 34 51 PM" width="300" height="800"/>
</div>


## 🚀 Project Overview  
Developed a **location-aware React Native application** that helps users find nearby restaurants on an interactive map with rich details.

---

## 🛠️ Technologies Used  
- ⚛️ **React Native**  
- 🟨 **JavaScript**  
- 🤖 **Android Studio**  
- 🗺️ **react-native-maps**

---

## ✨ Key Features  
- 📍 **Location Permission Handling**  
  - Requests and manages device location access securely  

- 🗺️ **Interactive Map View**  
  - Displays user location and nearby restaurants using `react-native-maps`

- 🍴 **Restaurant Data Integration**  
  - Fetches real-time restaurant data from public APIs  
  - Supports APIs like **Yelp** or **Foursquare**

- 📌 **Map Markers**  
  - Shows restaurant locations with clickable markers  

- 📄 **Bottom Sheet Details**  
  - Displays restaurant name, rating, address, and more in a smooth bottom sheet UI  

---

## 🧰 Tools & Resources  
- ⚙️ **React Native CLI**  
- 🤖 **Android Studio**  
- 🗺️ **react-native-maps**  
- 📡 **Geolocation API**  
- 🌐 **Public Restaurant APIs (Yelp / Foursquare)**  

---
## 📡 API Documentation

### 🔗 API Used
**Foursquare Places API (v3)**
---

### 🔐 Authentication

The **API** requires a **Service **API** Key**.

#### Request Headers

- http Authorization: YOUR_FOURSQUARE_API_KEY Accept: application/json ⚠️ Important Notes
- Use a Service **API** Key, not a legacy key

 Do **NOT** use Bearer

 **API** key must have Places **API** enabled

### 📥 Request Parameters
- Parameter	Description
- ll	Latitude and Longitude (lat,lng)
- query	Search keyword (restaurant)
- radius	Search radius (meters)
-  limit	Number of results

### 📤 Sample **API** Response
```
{
    *results*: [
    {
    *fsq_id*: *123*,
    *name*: *Domino's Pizza*,
    *categories*: [{ *name*: *Pizza Place* }],
    *location*: {
    *address*: *Connaught Place*,
    *locality*: *New Delhi*,
    *region*: *Delhi*
    },
    *geocodes*: {
    *main*: {
    *latitude*: 28.**6315**,
    *longitude*: 77.**2167**
    }
    }
    }
    ]
}
```
### 🧠 **API** Integration Code
```
import axios from *axios*;

const API_KEY = *YOUR_FOURSQUARE_API_KEY*;

export const fetchRestaurants = async (lat, lng) => {
    try {
    const response = await axios.get(
    *[https://api.foursquare.com/v3/places/search*,](https://api.foursquare.com/v3/places/search*,)
    {
    headers: {
    Accept: *application/json",
    Authorization: API_KEY,
    },
    params: {
    ll: `${lat},${lng}`,
    query: *restaurant*,
    radius: **2000**,
    limit: 10,
    },
    }
    );

    return response.data.results;
    } catch (error) {
    console.error(*Foursquare **API** Error:*, error.message);
    return [];
    }
};
```
### 🔑 **API** Key Setup
- Steps to Get **API** Key
``
Go to 👉 [https://location.foursquare.com/developer](https://location.foursquare.com/developer)
``
- Create a Service **API** Key

- Enable Places **API**

- Copy the key



## 🗂️ Folder Structure

| Path | Description |
|-----|-------------|
| `src/` | Main source folder |
| `src/components/` | Reusable UI components |
| `src/components/RestaurantBottomSheet.js` | Bottom sheet UI for restaurant details |
| `src/screens/` | Application screens |
| `src/screens/MapScreen.js` | Displays map with nearby restaurant markers |
| `src/screens/RestaurantListScreen.js` | Displays list of nearby restaurants |
| `src/services/` | API and helper functions |
| `src/services/foursquareApi.js` | Handles Foursquare Places API requests |
| `App.js` | Application entry point |
| `package.json` | Project dependencies and scripts |
| `README.md` | Project documentation |
      
                    
## 🚀 How to Run the Project 
- 1️⃣ Clone the Repository git clone [https://github.com/Ash914027/Restaurant-Finder-with-MapView.git](https://github.com/Ash914027/Restaurant-Finder-with-MapView.git) 
- 2️⃣ Navigate to Project cd Restaurant-Finder-with-MapView 
- 3️⃣ Install Dependencies npm install 
- 4️⃣ Start the App npx expo start
- 5️⃣ Run on Phone Install Expo Go from Play Store
- Scan QR code
 - App opens instantly 📱
 - 
## 📦 APK Download

You can download and install the Android APK directly from the link below:

🔗 **APK Download:**  
👉 [Download Restaurant Finder APK]()


## 📱 *A clean, modern, and scalable solution for location-based food discovery!* 🍕😋
```

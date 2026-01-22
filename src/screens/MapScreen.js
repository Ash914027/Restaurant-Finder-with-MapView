import React from "react";
import { View, StyleSheet, Platform, Text, TouchableOpacity } from "react-native";
import RestaurantBottomSheet from "../components/RestaurantBottomSheet";

let MapView, Marker;
if (Platform.OS !== 'web') {
  const maps = require('react-native-maps');
  MapView = maps.default;
  Marker = maps.Marker;
}

const MapScreen = ({ location, restaurants, selectedRestaurant, setSelectedRestaurant, refreshData }) => {
  if (!location) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Restaurant Finder</Text>
        </View>
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    );
  }

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Text>Map view is not available on web. Please use the mobile app.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Restaurant Finder</Text>
        <TouchableOpacity style={styles.refreshButton} onPress={refreshData}>
          <Text style={styles.refreshText}>🔄</Text>
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation
      >
        {restaurants.map(item => (
          <Marker
            key={item.fsq_id}
            coordinate={{
              latitude: item.geocodes.main.latitude,
              longitude: item.geocodes.main.longitude,
            }}
            title={item.name}
            onPress={() => setSelectedRestaurant(item)}
          />
        ))}
      </MapView>

      <RestaurantBottomSheet restaurant={selectedRestaurant} onClose={() => setSelectedRestaurant(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    fontSize: 18,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  map: { flex: 1 },
});

export default MapScreen;
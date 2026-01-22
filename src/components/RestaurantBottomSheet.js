import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const RestaurantBottomSheet = ({ restaurant, onClose }) => {
  if (!restaurant) return null;

  const category = restaurant.categories?.[0]?.name || "Restaurant";
  const address = restaurant.location?.address || "Address not available";
  const rating = restaurant.rating || "No rating";

  return (
    <View style={styles.sheet}>
      <View style={styles.handle} />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
      {restaurant.photos && restaurant.photos[0] && (
        <Image source={{ uri: restaurant.photos[0].prefix + '300x200' + restaurant.photos[0].suffix }} style={styles.image} />
      )}
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
      {restaurant.hours && (
        <Text style={styles.hours}>Hours: {restaurant.hours.display}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    maxHeight: '50%',
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 8,
  },
  closeText: {
    fontSize: 18,
    color: '#666',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  hours: {
    fontSize: 14,
    color: '#333',
  },
});

export default RestaurantBottomSheet;
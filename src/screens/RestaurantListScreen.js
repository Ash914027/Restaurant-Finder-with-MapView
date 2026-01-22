import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import RestaurantBottomSheet from "../components/RestaurantBottomSheet";

const RestaurantListScreen = ({
  restaurants,
  selectedRestaurant,
  setSelectedRestaurant,
}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelectedRestaurant(item)}
    >
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.category}>
          {item.categories?.[0]?.name || "Restaurant"}
        </Text>

        <Text style={styles.address}>
          {item.location?.address ||
            `${item.location?.locality || ""} ${item.location?.region || ""}`}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Restaurants</Text>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.fsq_id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <RestaurantBottomSheet
        restaurant={selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  list: { padding: 16 },
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    padding: 16,
    elevation: 2,
  },
  details: { flex: 1 },
  name: { fontSize: 18, fontWeight: "bold", marginBottom: 4 },
  category: { fontSize: 14, color: "#666", marginBottom: 4 },
  address: { fontSize: 14, color: "#333" },
});

export default RestaurantListScreen;

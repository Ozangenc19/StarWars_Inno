import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import styles from "./styles/themeStyles";

type planets = {
  name: string;
  url: string;
};

const ApiDataFetcher = () => {
  const [users, setUsers] = useState<planets[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then(response => response.json())
      .then(data => {  
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Erreur : ", error);
        setError(true);
      });
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Chargement des données...</Text>
      </View>
    );
  }

  if (error) {
    return <Text>Une erreur s'est produite lors de la récupération des données.</Text>;
  }

  const renderItem = ({ item }: { item: planets }) => (
    <View style={styles.characterContainer}>
      <Text style={styles.darkText}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={users}
      keyExtractor={user => user.name.toString()}
      renderItem={renderItem}
    />
  );
};

export default ApiDataFetcher;

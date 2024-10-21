import React, { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import styles from "./styles/themeStyles";
import { Link } from "expo-router";
import { UserContext } from "./context/UserContext";

//finir cette classe shipselection 

type planets = {
  name: string;

};

const ApiDataFetcher = () => {
  const [planets, setPlanets] = useState<planets[]>([]);
  const context = useContext(UserContext); 

    if (!context) return <Text>Erreur: context indisponible</Text>;

    const {setPlanet} = context;


  useEffect(() => {
    fetch('https://swapi.dev/api/starships')
      .then(response => response.json())
      .then(data => {  
        setPlanets(data.results);
      })
    
  }, []);

  const renderItem = ({ item }: { item: planets }) => (
    <View>
      <Text>{item.name}</Text>
      <Link href={"./ShipSelection"} asChild>
        <TouchableOpacity onPress={() => setPlanet(item.name)}>
          <Text>Sélectionnez</Text>  
        </TouchableOpacity>

      </Link>
    </View>
  );

  return (
    <FlatList
      data={planets}
      keyExtractor={user => user.name.toString()}
      renderItem={renderItem}
    />
  );
};

export default ApiDataFetcher;

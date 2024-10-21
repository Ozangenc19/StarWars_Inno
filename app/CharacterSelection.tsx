import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import styles from "./styles/themeStyles";
import { Link } from "expo-router";

type character = {
  name: string;
};

const CharacterSelection = () => {
  const [character, setCharacters] = useState<character[]>([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((data) => {  
        setCharacters(data.results);
      })
  }, []);


  const renderItem = ({ item }: { item: character }) => (
    <View>
      <Text>{item.name}</Text>
      <Link href={"./CharacterSelection"} asChild>
        <TouchableOpacity title="Jedi" onPress={() => setCharacters("Jedi")} />
      </Link>
    </View>
  );

  return (

    <View>
      <Text>Sélectionnez un personnage</Text>

       <FlatList
      data={character}
      keyExtractor={user => user.name.toString()}
      renderItem={renderItem}
    />
    </View>
   
  );
};

export default CharacterSelection;

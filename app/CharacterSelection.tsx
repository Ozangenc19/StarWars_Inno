import React, { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import styles from "./styles/themeStyles";
import { Link } from "expo-router";
import { UserContext } from "./context/UserContext";

type character = {
  name: string;
};

const CharacterSelection = () => {
  const [characters, setCharacters] = useState<character[]>([]);
  const context = useContext(UserContext); 
  
  if (!context) return <Text>Erreur: context indisponible</Text>;

  const {setCharacter} = context;

 

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
      <Link href={"./PlanetSelection"} asChild>
        <TouchableOpacity onPress={() => setCharacter(item.name)}>
          <Text>Sélectionnez</Text>  
        </TouchableOpacity>

      </Link>
    </View>
  );

  return (

    <View>
      <Text>Sélectionnez un personnage</Text>

       <FlatList
      data={characters}
      keyExtractor={chara => chara.name.toString()}
      renderItem={renderItem}
    />
    </View>
   
  );
};

export default CharacterSelection;

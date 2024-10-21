import { Text, View, Button } from "react-native";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { UserContext } from "./context/UserContext";
import styles from "./styles/themeStyles";

export default function Index() {
  //const [faction, setFaction] = useState<String>("");

  // recupére la valeur du context 
  const context = useContext(UserContext);

  if (!context) return <Text>Erreur: context indisponible</Text>;
  
  // destructuring de la valeur du context
  const {faction, setFaction} = context;

  const router = useRouter();



  return (
    <View style={faction == "Jedi" ? styles.lightcontainer : styles.darkcontainer} >
        <Text style={faction == "Jedi" ? styles.lightText : styles.darkText}>Votre faction : {faction}</Text>
        <Link href={"./CharacterSelection"} asChild>
        <Button title="Jedi" onPress={() => setFaction("Jedi")} />
        </Link>
        <Link href={"./CharacterSelection"} asChild>
        <Button title="Sith" onPress={() => setFaction("Sith")} />
        </Link>
    </View>
  );
}
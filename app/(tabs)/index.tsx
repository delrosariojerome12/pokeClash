import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";

const MasterDex = () => {
  console.log("do fetching?");

  const [names, setNames] = useState<any[]>([]);

  const getSome = async () => {
    const api = new PokemonClient();

    await api
      .listPokemons(0, 10)
      .then((res) => {
        console.log("here", res);
        setNames(res.results as any);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSome();
  }, []);

  return (
    <View>
      <Text>MasterDex</Text>

      {names.length > 0 &&
        names.map((item) => {
          return <Text>{item.name}</Text>;
        })}
    </View>
  );
};

export default MasterDex;

const styles = StyleSheet.create({});

import React from "react";
import { Text, View } from "@components/Themed";
import { StyleSheet } from "react-native";
import { useMasterDexHooks } from "@hooks/masterDex/masterDexHooks";

const MasterDex = () => {
  console.log("master dex screen");

  const { renderMasterList } = useMasterDexHooks();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>MasterDex</Text>
      {renderMasterList()}
    </View>
  );
};

export default MasterDex;

const styles = StyleSheet.create({});

import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "@components/useColorScheme.web";
import { useClientOnlyValue } from "@components/useClientOnlyValue";
import Colors from "@constants/Colors";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTabHooks } from "@hooks/tabHooks/tabHooks";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [activeTab, setActiveTab] = useState<string>(""); // Track active tab

  const { onBuildTab, onClashTab, onMasterTab, onShopTab, onUserTab } =
    useTabHooks();

  // Helper function to clean up the target key
  const getScreenName = (target: string) => {
    const screenName = target.split("-")[0]; // Extract the part before the first "-"
    return screenName;
  };

  // Handle tab press based on the screen name
  const handleTabPress = (target: string) => {
    const screenName = getScreenName(target);

    if (activeTab === screenName) {
      console.log("Tab already active, ignoring fetch.");
      return; // Prevent duplicate fetch
    }

    setActiveTab(screenName);

    switch (screenName) {
      case "index":
        console.log("Master Dex tab pressed");
        onMasterTab?.();
        break;
      case "buildteam":
        console.log("Build Team tab pressed");
        onBuildTab?.();
        break;
      case "clash":
        console.log("Clash tab pressed");
        onClashTab?.();
        break;
      case "shop":
        console.log("Shop tab pressed");
        onShopTab?.();
        break;
      case "user":
        console.log("User tab pressed");
        onUserTab?.();
        break;
      default:
        console.log(`Unknown tab pressed: ${target}`);
    }
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        animation: "fade",
        headerShown: false,
        freezeOnBlur: true,
      }}
      screenListeners={{
        tabPress: (e) => {
          const { target } = e; // Extract the target key
          handleTabPress(target ?? ""); // Call the handler with the cleaned screen name
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Master Dex",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="book-bookmark" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="buildteam"
        options={{
          title: "Build Team",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="build" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="clash"
        options={{
          title: "Clash",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="sword-cross"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => (
            <Ionicons name="storefront" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

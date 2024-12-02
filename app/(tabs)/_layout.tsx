import React from "react";
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

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
          console.log("screen", e);
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

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RelationsGraph from "./RelationsGraph";
import { NavigationContainer } from "@react-navigation/native";
import { Profile } from "./Profile";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={RelationsGraph} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

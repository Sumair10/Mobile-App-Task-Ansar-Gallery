import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, TextInput, StyleSheet, Dimensions, Text } from 'react-native';

import { GlobalStyles } from './constants/Styles';
import MainScreen from './screens/MainScreen';
import ProductCartScreen from './screens/ProductCartScreen';
import ProductFashionScreen from './screens/ProductFashionScreen';
import ProductStandardScreen from './screens/ProductStandardScreen'
import ProductConfigScreen from './screens/ProductConfigScreen'
import ProductSimpleScreen from './screens/ProductSimpleScreen'
import EmptyScreen from './screens/EmptyScreen'
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function CommonProductScreen({ name, component, label, icon }) {
  return {
    name,
    component,
    options: {
      headerShown: false,
      tabBarLabel: label,
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={icon} size={size} color={color} />
      ),
    },
  };
}

function createProductNavigator(screenName, screenComponent) {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.primary,
      }}
    >
      <BottomTabs.Screen {...CommonProductScreen({ name: screenName, component: screenComponent, label: 'Home', icon: 'home' })} />
      <BottomTabs.Screen {...CommonProductScreen({ name: 'EmptyScreen1', component: EmptyScreen, label: 'Categories', icon: 'list' })} />
      <BottomTabs.Screen {...CommonProductScreen({ name: 'EmptyScreen2', component: EmptyScreen, label: 'Promotions', icon: 'cash' })} />
      <BottomTabs.Screen {...CommonProductScreen({ name: 'EmptyScreen3', component: EmptyScreen, label: 'Account', icon: 'person-circle' })} />
      <BottomTabs.Screen {...CommonProductScreen({ name: 'EmptyScreen4', component: ProductCartScreen, label: 'Cart', icon: 'cart' })} />
    </BottomTabs.Navigator>
  );
}

function ProductFashion() {
  return createProductNavigator("ProductFashionScreen", ProductFashionScreen);
}
function ProductStandard() {
  return createProductNavigator("ProductStandardScreen", ProductStandardScreen);
}

function ProductConfig() {
  return createProductNavigator("ProductConfigScreen", ProductConfigScreen);
}

function ProductSimple() {
  return createProductNavigator("ProductSimpleScreen", ProductSimpleScreen);
}

function ProductCart() {
  return createProductNavigator("ProductCartScreen", ProductCartScreen);
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary },
              headerTintColor: 'white',

            }}
          >
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="ProductFashion"
              component={ProductFashion}
              options={{
                contentStyle: {
                  backgroundColor: 'white'
                },

                headerTitle: () => (
                  <View style={{ flexDirection: 'row', alignItems: 'flex-start', display: 'flex', justifyContent: 'flex-start' }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Search the Market"
                      underlineColorAndroid="transparent"
                      placeholderTextColor={GlobalStyles.gray}
                    />
                    <Ionicons style={styles.searchIcon} name="search" size={24} color='black' />
                  </View>
                ),
                headerRight: ({ color, size }) => (
                  <>
                    <View style={styles.filterContainer}>

                      <Ionicons name="filter" size={24} color='white' />
                      <Text style={styles.filterText}>Filter</Text>
                    </View>
                  </>
                ),

              }}


            />
            <Stack.Screen
              name="ProductStandard"
              component={ProductStandard}
              options={{
                contentStyle: {
                  backgroundColor: 'white'
                },

                headerTitle: () => (
                  <View style={{ flexDirection: 'row', alignItems: 'flex-start', display: 'flex', justifyContent: 'flex-start' }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Search the Market"
                      underlineColorAndroid="transparent"
                      placeholderTextColor={GlobalStyles.gray}
                    />
                    <Ionicons style={styles.searchIcon} name="search" size={24} color='black' />
                  </View>
                ),
                headerRight: ({ color, size }) => (
                  <>
                    <View style={styles.filterContainer}>

                      <Ionicons name="filter" size={24} color='white' />
                      <Text style={styles.filterText}>Filter</Text>
                    </View>
                  </>
                ),

              }}



            />
            <Stack.Screen
              name="ProductConfig"
              component={ProductConfig}
              options={{
                contentStyle: {
                  backgroundColor: 'white'
                },

                headerTitle: () => (
                  <View style={{ flexDirection: 'row', alignItems: 'flex-start', display: 'flex', justifyContent: 'flex-start' }}>
                    <TextInput
                      style={[styles.input, { width: windowWidth * 0.7 }]}
                      placeholder="Search the Market"
                      underlineColorAndroid="transparent"
                      placeholderTextColor={GlobalStyles.gray}
                    />
                    <Ionicons style={styles.searchIcon} name="search" size={24} color='black' />
                  </View>
                ),


              }}



            />
            <Stack.Screen
              name="ProductSimple"
              component={ProductSimple}
              options={{
                contentStyle: {
                  backgroundColor: 'white'
                },

                headerTitle: () => (
                  <View style={{ flexDirection: 'row', alignItems: 'flex-start', display: 'flex', justifyContent: 'flex-start' }}>
                    <TextInput
                      style={[styles.input, { width: windowWidth * 0.7 }]}
                      placeholder="Search the Market"
                      underlineColorAndroid="transparent"
                      placeholderTextColor={GlobalStyles.gray}
                    />
                    <Ionicons style={styles.searchIcon} name="search" size={24} color='black' />
                  </View>
                ),


              }}
            />
            <Stack.Screen
              name="ProductCart"
              component={ProductCart}
              options={{
                contentStyle: {
                  backgroundColor: 'white'
                },
                headerTitle: 'Cart',
                headerTitleAlign: 'center',
              }}
            />


          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    </>
  );
}


const styles = StyleSheet.create({

  input: {

    backgroundColor: '#fff',
    color: '#424242',
    fontSize: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 10,
    width: windowWidth * 0.6,
    paddingVertical:windowHeight *0.005
  },
  searchIcon: {
    backgroundColor: 'white',
    padding: 1,
    paddingRight:10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingVertical:windowHeight *0.0062
  },

  filterContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterText: {
    fontSize: 10,
    color: 'white'
  }

})


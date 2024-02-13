import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}> This is The Home Screen</Text>
      <Button
      title="Sign up"
      onPress={() => navigation.navigate("Sign up")}
      >
      </Button>

      <Button
      title="Login"
      onPress={() => navigation.navigate("Login")}
      >
      </Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign up" component={ScreenOne} />
        <Stack.Screen name="Login" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;


// let [number, setNum] = useState(0)
//  

//   const test = () => {
//     setNum(number + 1)
//   };


//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize: 80}}>{number}</Text>
//       <Button title="Click me"
//       onPress={test}
//       ></Button>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 20
  },
  title:{
    fontSize: 32,
    // alignContent: 'top',
  }
});

import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tray from './app/Tray';
import RestList from './app/RestList';

export default function App() {
  const [selectRestaurant, setSelectRestaurant] = useState(null);

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>
        Lunch Spot🍔🍺🌮</Text>
        <RestList selectRestaurant={selectRestaurant}/>
      <StatusBar style="auto" />
    </View>
    <Tray setSelectRestaurant={setSelectRestaurant}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#F9EBE0',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: 'black',
    fontSize: 36,
  }
});

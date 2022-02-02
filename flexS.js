/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const flexS = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <Text style={styles.hello}>Welcome to React</Text>
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  box1: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
  },
  hello: {
    backgroundColor: 'blue',
  },
});
export default flexS;
//export default ride;

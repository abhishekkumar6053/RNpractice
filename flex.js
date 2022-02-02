/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
const flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'row',
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
  box3: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
  },
});
export default flex;

//export default ride;

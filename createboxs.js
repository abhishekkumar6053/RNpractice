/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Box = ({text}) => (
  <View style={styles.box}>
    <Text>{text}</Text>
  </View>
);

const createboxs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Box text="A" />
        <Box text="B" />
        <Box text="C" />
      </View>
      <View style={styles.row}>
        <Box text="D" />
        <Box text="E" />
        <Box text="F" />
      </View>
      <View style={styles.row}>
        <Box text="G" />
        <Box text="H" />
        <Box text="I" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default createboxs;

/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
const practice = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.hello}>ABHISHEK KUMAR</Text>
     <Text style={styles.hello}>REACT NATIVE DEVELOPER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eb4034',
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'column',
  },
  box1: {
    backgroundColor: 'green',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  box2: {
    backgroundColor: 'orange',
    flex:1,
  },
  hello:{
      color:'white',
      fontSize:25,
      fontFamily:'Vertana',
  },
  box3:{
    backgroundColor: 'yellow',
    flex:1,
  },
});
export default practice;

//export default ride;

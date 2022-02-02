import React from 'react';
import {Button, Image,Pressable,Text,StyleSheet, View} from 'react-native';
const butto = () => {
  return (
      <View style={styles.container}>
      <Button onPress={()=>{
        alert('react native developer');
      }} title="ClICK me" />
  <Image style={styles.img} source={{
          uri: 'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png',
  }}/>
  <Pressable onPress={()=>{
   alert('hello');
  }}>
    <Text>PRESS ME</Text>
  </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eb3434'
  },
  img:{
    width:400,
    height:400,
  }
})
export default butto;

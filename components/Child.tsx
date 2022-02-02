import React from 'react';
import {Text,View} from 'react-native';
interface Childprops{
    name: string;
    age:number;
}
//without object destructuring
// const Child=(props:Childprops)=>{
//     return(
//         <View>
//         <Text>{props.name}</Text>
//         <Text>{props.age}</Text>
//         </View>
//     )
// }

//with object destructuring 
const Child=({name,age}:Childprops)=>{
    return(
        <View>
        <Text>{name}</Text>
        <Text>{age}</Text>
        </View>
    )
}
export default Child;
import React from 'react';
import {Text,View} from 'react-native';
interface Childprops{
    item:{
    name: string;
    age?:number;
    isLogin?: boolean;
}}
const Objectfun=({item}:Childprops)=>{
    return(
        <View>
            {
                item.isLogin?
                (<View>
                    <Text>{item.name}</Text>
                    <Text>{item.age}</Text>
                </View>):
                (
                    <Text>Welcome Guest</Text>
                )
            }
        </View>
    )
        }

export default Objectfun;
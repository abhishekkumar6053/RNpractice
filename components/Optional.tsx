import React from 'react';
import {Text,View} from 'react-native';
interface Childprops{
    name: string;
    age?:number;
    isLogin?: boolean;
}
const Optionalfun=({name,age,isLogin}:Childprops)=>{
    return(
        <View>
            {
                isLogin?
                (<View>
                    <Text>{name}</Text>
                    <Text>{age}</Text>
                </View>):
                (
                    <Text>Welcome Guest</Text>
                )
            }
        </View>
    )
        }

export default Optionalfun;
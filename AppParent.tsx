import React from 'react';
import {View} from 'react-native';
import Child from './components/Child';
import Optionalfun from './components/Optional';
import Objectfun from './components/ObjectPass';

//using props 
// const Child=(props:({name:string}))=>{
//     return(
//         <View>
//         <Text>{props.name}</Text>
//         </View>
//     )
// }

let children = [{
    name: 'abhishek',
    age: 23,
    isLogin: false
},
{
    name: 'aditya',
    age: 23,
    isLogin: true
},
]
const AppParent=()=>{
    return(
        <View>
            {/* <Child name={'Abhishek'} age={23}/>
            <Child name={'Sanu'}age={25}/> */}
             {/* <Optionalfun name={'Abhishek'} age={23} isLogin={true}/>
            <Optionalfun name={'Sanu'}/> */}
            {children.map(child=>(<Objectfun item={child} />))}
        </View>
    )
}
export default AppParent;
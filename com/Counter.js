import React from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { setCount } from "../redux/action";

export const Counter = () => {
    // @ts-ignore
    const number = useSelector((state)=>state.CounterReducer);
    const dispatch = useDispatch()
    return (
        <View style={{justifyContent:"center", flexDirection:"column"}}>
            <Text style={{fontSize:100,color:(number<5)?"red":"blue"}}>{number}</Text>
            <Pressable 
            style={{justifyContent:"center"}}
            onPress={()=> {
                // @ts-ignore
                dispatch(setCount(number+1))
            }}><Text style={{backgroundColor:"red", textAlign:"center", padding:10, borderRadius:10, color:"white", fontSize:40}}>+</Text></Pressable>
        </View>
    )
}
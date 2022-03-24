import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native-web';

import { useCountContext } from '../../context/CountContextProvider';
export default function TopView(){
    const CountContext= useCountContext();
    return(
        <View style={styles.container}>
            <Text style={{color: '#000'}}>{CountContext.count}</Text>
                <TouchableOpacity style={{display: 'flex',flexDirection: 'row', backgroundColor: 'green'}} onPress={()=> CountContext.setCount(CountContext.count+1)}>
                    <Text>Task 1</Text>
            </TouchableOpacity>

            <Text style={{color: '#000'}}>{CountContext.count2}</Text>
                <TouchableOpacity style={{display: 'flex',flexDirection: 'row', backgroundColor: 'blue'}} onPress={()=> CountContext.setCount(CountContext.count2+1)}>
                    <Text>Task 2</Text>
            </TouchableOpacity>

            <Text style={{color: '#000'}}>{CountContext.count3}</Text>
                <TouchableOpacity style={{display: 'flex',flexDirection: 'row', backgroundColor: 'red'}} onPress={()=> CountContext.setCount(CountContext.count3+1)}>
                    <Text>Task 3</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        background: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
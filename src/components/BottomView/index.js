import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native-web';

import { useCountContext } from '../../context/CountContextProvider';
export default function TopView(){
    const CountContext= useCountContext();
    return(
        <View style={styles.container}>
            <Text style={{color: '#000'}}>{CountContext.count}</Text>
                <TouchableOpacity style={{display: 'flex',flexDirection: 'row', backgroundColor: 'grey'}} onPress={()=> CountContext.setCount(CountContext.count+1)}>
                    <Text>React Learning</Text>
            </TouchableOpacity>

            <Text style={{color: '#000'}}>{CountContext.count2}</Text>
                <TouchableOpacity style={{display: 'flex',flexDirection: 'row', backgroundColor: 'red'}} onPress={()=> CountContext.setCount(CountContext.count2+1)}>

                    <Text>HTML Learning</Text>
            </TouchableOpacity>

            <Text style={{color: '#000'}}>{CountContext.count3}</Text>
                <TouchableOpacity style={{display: 'flex',flexDirection: 'row', backgroundColor: 'yellow'}} onPress={()=> CountContext.setCount(CountContext.count3+1)}>
                    <Text>JS Learning</Text>
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
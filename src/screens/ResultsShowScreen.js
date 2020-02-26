import React, { version, useState, useEffect } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
const ResultsShowScreen = ({navigation}) => {
    const [result,SetResult]=useState('');
    const id=navigation.getParam('id');
    const getApiDetail = async (id) => {
        const response =await yelp.get(`./${id}`);
        SetResult(response.data);
    }
    useEffect(()=>{
        getApiDetail(id);
    },[]);
    return (
        <View>
            <Text>Name is: {result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photos)=>photos}
                renderItem={({item})=>{
                    console.log(item,'itemmmm');
                    return (
                        <Image
                            style={style.styleImage}
                            source={{uri:item}}
                        />
                    )
                }}
            />
        </View>
    );
};

const style=StyleSheet.create({
    styleImage:{
        width:250,
        height:200,
    }
});

export default ResultsShowScreen;
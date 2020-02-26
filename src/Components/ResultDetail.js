import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({result}) => {
    return (
        <View style={style.styleView}>
            <Image
                style={style.styleImage}
                source={{uri:result.image_url}}
            />
            <Text style={style.styleText}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Review</Text>
        </View>
    );
}

const style=StyleSheet.create({
    styleView:{
        marginBottom:10,
        // marginRight:10,
        marginLeft:5
    },
    styleImage:{
        width:250,
        height:120,
        borderRadius:5,
    },
    styleText:{
        fontWeight:'bold',
        // marginLeft:5,
        marginTop:5,
    }
})

export default ResultDetail;
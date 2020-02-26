import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={style.viewStyle}>
            <Feather name="search" style={style.iconStyle} size = {30} />
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={style.inputStyle}
            placeholder='search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    );
}
const style=StyleSheet.create({
    viewStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        marginHorizontal:15,
        borderRadius:5,
        flexDirection:'row',
        marginTop:7,
        alignItems:'center',
    },
    inputStyle:{
        flex:1,
        marginLeft:4,
        height:30,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:5,
    }
})

export default SearchBar;
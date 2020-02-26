import React from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultDetail from './ResultDetail';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const ResultList = ({title,countFilter,navigation}) => {
    if(!countFilter.length){
        return null;
    }
   return (
       <View>
           <Text style={style.textStyle}>{title}</Text>
            <Text style={{marginLeft:5, }}>results is : {countFilter.length}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={countFilter}
                keyExtractor = { rs => rs.id}
                renderItem = { ({item}) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('ResultsShowScreen',{id:item.id})}>
                            <ResultDetail result={item} 
                            />
                        </TouchableOpacity>  );
                }}
            />
       </View>
   ); 
}

const style=StyleSheet.create({
    textStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5,
        marginLeft:5,
    }
});

export default withNavigation(ResultList);  
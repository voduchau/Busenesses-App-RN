import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../Components/ResultList';
const SearchScreen = ({navigation}) => {
    const [term,setTerm]=useState('');
    const [results,err,SearchAPI]= useResults();

    const countFilter = (price) => {
       return results.filter( item => item.price == price)
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange = {setTerm}
                onTermSubmit = {()=>SearchAPI(term)}
                />
            <Text style={{marginLeft:7}}>we found {results.length} results</Text>
            <Text>{err}</Text>

            <ScrollView>
                <ResultList 
                    countFilter={countFilter('$')} 
                    title='Cost Effective' />
                <ResultList 
                    countFilter={countFilter('$$')} 
                    title='Bit Pricier' />
                <ResultList 
                    countFilter={countFilter('$$$')} 
                    title='Big Spender' />
            </ScrollView>

        </>
    );
}
const style=StyleSheet.create({
    container:{
        marginLeft:10,
        flex:1,
    }
});

export default SearchScreen;
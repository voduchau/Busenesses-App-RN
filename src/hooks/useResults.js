import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results,SetResults]=useState([]);
    const [err,SetErr]=useState('');

    const SearchAPI = async (searchTerm)=>{
        try{
        const respone= await yelp.get('./search',{
            params:{
                term:searchTerm,
                limit:30,
                location:'New York'
            }
        })
        // console.log(respone.data.businesses,'respone dataaaa');
        SetResults(respone.data.businesses);
    }
        catch(e){
            err ? SetErr('some thing wrong'):null;
        }
    }
    useEffect(()=>{
        SearchAPI('axia');
    },[])
    return [results,SetErr,SearchAPI];
}
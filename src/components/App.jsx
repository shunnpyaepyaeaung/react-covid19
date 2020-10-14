import React,{useState} from 'react';
import Container from './Container';
import SearchInput from './SearchInput';
import Result from './Result';
import axios from 'axios';
import '../styles.css'
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer'

function App() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [country ,setCountry] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    async function callApi(coun=""){
        if(coun){
            var search = coun
        }
        try{
            let response = await axios(`https://covid-193.p.rapidapi.com/statistics?country=${search}`,{
                headers:{
                    'x-rapidapi-key': '1e15972df8mshbd617b9f4faa36dp1d822ajsnc840e155ffc4'
                }
            })
            const result = response.data.response
            setData(result)
        }
        catch(err){
            console.log(err);
            setData({});
        }
        setSearchResult([])
    }

    useEffect(()=>{
        async function suggestion(){
            try{
                let country = await axios(`https://covid-193.p.rapidapi.com/countries`,{
                    headers:{
                        'x-rapidapi-key': '1e15972df8mshbd617b9f4faa36dp1d822ajsnc840e155ffc4'
                    }
                })
                const api = country.data.response
                setCountry(api)
            }
            catch(err){
                console.log(err);
            }
        }  
        suggestion()  
    },[])


  useEffect(()=>{

    if(search){
      var result = country.filter(e=>e.toLowerCase().includes(search.toLowerCase()));
      setSearchResult(result);
    }else{
        setSearchResult([])
    }

  },[search])

   
    return (
        <>
        <Sidebar  country={country} setSearch={setSearch} callApi={callApi}/>
        <Container>
            <h1>International Covid-19 Data</h1>
            <SearchInput search={search} setSearch={setSearch} callApi={callApi} country={country} searchResult={searchResult} setSearchResult={setSearchResult}/>
            <Result data={data}/>
        </Container>
        <Footer />
        </>
    )
}

export default App

import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import {Route} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About'
import Countrydata from './components/Countrydata';
import Countrylist from './components/Countrylist';
import Coronadata from './components/Coronadata';
var id= 0
function App() {
  const [list,setList] = useState([])
 const [info, setInfo] = useState([])
 const [news, setNews] = useState([])
const apiKeyNews = "b1027c1f7d5349d3a63356a9abc634dd"
function News () {
  fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-07-04&sortBy=popularity&apiKey=${apiKeyNews}`)
   .then(data => data.json())
   .then(recurso => {
    console.log(recurso)
    console.log("juan")
     if(recurso.status == "ok"){
       const noticias = {
         status: recurso.status
       }
       setNews ([noticias])
      }
       else {
          alert("error")
       }
     }
     
  
   )}

 function coronaApi(country) {
   fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`)
   .then(data => data.json())
   .then(recurso => {
     console.log(recurso)
     console.log("↑↑↑ recurso data coronaApi ↑↑↑")
          if(recurso.All !== undefined){
            const countries = {
            confirmed: recurso.All.confirmed,
            capitalcity: recurso.All.capital_city,
            country: recurso.All.country,
            deaths: recurso.All.deaths,
            recovered: recurso.All.recovered,
            population: recurso.All.population,
            life_expectancy:recurso.All.life_expectancy,
            updated: recurso.All.updated ,
            location : recurso.All.location,
            continent: recurso.All.continent
            }
        
            setInfo (oldContries =>[...oldContries,{...countries,id}])
            id++
            console.log(info)
            console.log("↑↑↑ coronaApi  ↑↑↑")
            } else{
              alert("country doesn't found ")
            }
    
    }
    )
 }
 function coronaApiCountries(country) {
  fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`)
  .then(data => data.json())
  .then(recurso => {
    console.log(recurso)
    console.log("↑↑↑ recurso data coronaApiContries ↑↑↑")
    if(recurso !== undefined){
      const contries = recurso
        
         
          
      setList(contries)
    }
  })};
  return (
    <>
  <Nav></Nav>
  <Route exact path="/">

    <Home  coronaApi={coronaApi} news={News} info={info}  newsInfo = {news}/>
  </Route>
  <Route path="/about">
  <About/>
  </Route>
  <Route path="/contact">
    <Contact/>
  </Route>
  <Route exact path="/country/:countryId"

   render={({match}) =>
  <Countrydata country={match.params.countryId} info={info}/>
 }/>


<Route path="/countrylist">
  <Countrylist coronaApiCountries={coronaApiCountries} list={list}/>
</Route>
    </>
  );
}

export default App;

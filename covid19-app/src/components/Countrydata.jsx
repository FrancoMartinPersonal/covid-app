import react from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const MainDivInfo = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
margin-top:50px;
`


const DivInfoCardMain = styled.div `
    margin: 0 10px;
    border: 2px solid #ffffff67;
    border-radius: 4%;
    background: #a80a0a83;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap; 
    width: 30%;
`
const DivCountryName = styled.div `
text-align:center;
width: 100%;
background: #0000002f;
`
const DivInfoCard = styled.div `
display: flex;
flex-direction: column;
flex-wrap:wrap;
text-align:center;

`
const PerInfo = styled.div `
margin: 5px 0;
`
const H3Card = styled.h3`
padding: 1px ;
text-align:center;

width: 100%;
`

const H5Card = styled.h5`
padding: 1px 25px;
text-align:center;
margin:5px;

`


export default function Countrydata ({country, info}) {
   
    // console.log(infoMap)
    //   console.log(info.map(e => e.id))
    //   console.log(country)
    //   console.log( "↑↑↑ info countrydata ↑↑↑")
return (
    <MainDivInfo>
    {info.map(c => {
             if(country == c.id){
       return(  <DivInfoCardMain key={c.id}>
        <DivCountryName>
    <Link to={`/country/${c.id}`} style={{ textDecoration: 'none'},{color:'white'}}><H3Card>{c.country}</H3Card></Link>
    </DivCountryName>
    <DivInfoCard>
             <PerInfo>
             <H5Card>CONFIRMED</H5Card> 
             
             <H5Card style={{ color: '#b69f82' }}>{c.confirmed.toLocaleString()}</H5Card>
             </PerInfo>
             <PerInfo>
             <H5Card >RECOVERED</H5Card> 
             <H5Card style={{ color: '#3d973d' }}>{c.recovered.toLocaleString()}</H5Card>
             </PerInfo>
             <PerInfo>
             <H5Card>DEATHS</H5Card> 
             <H5Card style={{ color: '#c80000' }}>{c.deaths.toLocaleString()}</H5Card>
             </PerInfo>
             <PerInfo>
             <H5Card>LIFE EXPECTANCY</H5Card> 
             <H5Card style={c.life_expectancy< 50?{ color: '#dd0b0be3' }:c.life_expectancy>=70?{ color: '#2fc800' }:{ color: '#e4a111' }}
             >{c.life_expectancy}</H5Card>
             </PerInfo>
              
              <H5Card> </H5Card>
               <H5Card>population: {c.population.toLocaleString()}</H5Card>
               <H5Card>last updated: {c.updated? c.updated:"no time defined!"}</H5Card>
</DivInfoCard>

</DivInfoCardMain>
           
       )
    }})}
    </MainDivInfo>
       
       )  }
        

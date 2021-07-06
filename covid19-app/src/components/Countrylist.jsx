import react,{useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainDiv = styled.div `
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
text-align:center;
`
const ButtonGetCountries = styled.button `
margin:auto;
background: #c80000;
width: 8em;
border: none;
color: white;
border-radius: 5px;
font-weight:600;

`
export default function Countrylist({coronaApiCountries, list}){
  const [countriesnames,setCountriesnames] = useState()
     
  const keys = Object.keys(list)
keys.map(e => {
    console.log(e)
})

    console.log("↑↑↑  list countrylist ↑↑↑")
return(
  
    <MainDiv>
      
        <h3>get all countries to search</h3>
        <ButtonGetCountries onClick={e => {
            e.preventDefault()
            coronaApiCountries()
        }}>get countries
            </ButtonGetCountries>
            <div>
                 { keys.map(e => {
                  return(
                      <h5>{e}</h5>
                 )})}
            </div>
        
    </MainDiv>
)

}
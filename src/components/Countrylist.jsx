import React,{useState} from 'react'
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
cursor:pointer;
margin:auto;
background: #c80000;
width: 8em;
border: none;
color:white ;
border-radius: 5px;
font-weight:600;
&:hover  {
    background:  #b80101;
   
  }
  &:active  {
    background:#950101;
    
  }

`
export default function Countrylist({props,coronaApiCountries, list, coronaApi,info}){
  const [countriesnames,setCountriesnames] = useState()
     console.log(props)
  const keys = Object.keys(list);
  
// keys.map(e => {
//     console.log(e)
// })

//     console.log("↑↑↑  list countrynames ↑↑↑")
//     console.log(list)
//     console.log("↑↑↑  list countrylist ↑↑↑")
React.useEffect(() =>{
    coronaApiCountries()
},[])
return(
   
    <MainDiv>
       
        <h3>get all countries to search</h3>
        <ButtonGetCountries onClick={e => {
            e.preventDefault()
            coronaApiCountries()
           
        }}>get countries
            </ButtonGetCountries>
            <div>
                 {
                 
                     
                  keys.map(e => {
                    const countriesId={
                        id: e.All.iso }  
                        return(
                            <Link to="/"style={{textDecoration:"none"}}>
                                
                                <h5 style={{textDecoration:"none"},{color:"white"}}>
                                    {info.is}
                               </h5>
                          </Link>
                       )
                  })}
            </div>
        
    </MainDiv>
)

}
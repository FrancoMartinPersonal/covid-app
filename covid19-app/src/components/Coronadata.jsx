import react,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import imgSaved from '../img/cruz.png'
import imgInfected from '../img/coronavirus-5107715_1280.png'
import imgDeath from '../img/death_PNG39.png'
//images
const ImgSaved = styled.div `
background-image: url(${imgSaved});


background-size: cover;
width:1.5em;
height:1.5em;
`
const ImgInfected = styled.div `
background-image: url(${imgInfected});


background-size: cover;
width:1.5em;
height:1.5em;
`
const ImgDeath = styled.div `
background-image: url(${imgDeath});


background-size: cover;
width:1.5em;
height:1.5em;
`
//styles
const MainDivInfo = styled.div `
display: flex;
flex-direction: row;

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
const PerDataAndImage = styled.div `
display: flex;
justify-content: center;
flex-direction: row;
`
const H3Card = styled.h3`
padding: 1px ;


width: 100%;
`

const H5Card = styled.h5`
padding: 1px 8px;
text-align:center;
margin:5px;

`


export default function Coronadata ({info,newsInfo}) {
  
    console.log()
      
return (
    <MainDivInfo>
       {info.map(c =>
       <DivInfoCardMain key={c.id}>
                <DivCountryName>
            <Link to={`/country/${c.id}`} style={{ textDecoration: 'none'},{color:'white'}}><H3Card>{c.country}</H3Card></Link>
            </DivCountryName>
            <DivInfoCard>
                     <PerInfo>
                     <H5Card>CONFIRMED</H5Card> 

                            <PerDataAndImage>
                                    <H5Card style={{ color: '#e71f1f' }}>{c.confirmed.toLocaleString()}</H5Card>
                                    <ImgInfected/>
                            </PerDataAndImage>
                     </PerInfo>
                     <PerInfo>
                     <H5Card >RECOVERED</H5Card> 
                         <PerDataAndImage>
                              <H5Card style={{ color: '#3d973d' }}>{c.recovered.toLocaleString()}</H5Card>
                              <ImgSaved/>
                          </PerDataAndImage>
                     </PerInfo>
                     <PerInfo>
                     <H5Card>DEATHS</H5Card> 
                         <PerDataAndImage>
                                <H5Card style={{ color: '#000000' }}>{c.deaths.toLocaleString()}</H5Card>
                                <ImgDeath/>
                         </PerDataAndImage>
                     </PerInfo>
                      
                      <H5Card> </H5Card>
                       <H5Card>population: {c.population.toLocaleString()}</H5Card>
                       <H5Card>last updated: {c.updated? c.updated:"no time defined!"}</H5Card>
        </DivInfoCard>
       
       </DivInfoCardMain>
       
       )  }
        
    </MainDivInfo>
)


}
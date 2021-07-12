import React,{useState} from 'react'
import styled from 'styled-components'
import Coronadata from './Coronadata'

const MainHome = styled.div `
display:flex;
justify-content: center;
flex-direction: column;

`
const InputButtonDiv = styled.form `
display: flex;
flex-direction: row;
margin:30px 3em;
background:#272424;
padding: 10px;
justify-content: center;
width: 420px;
border: 1px solid #474141;
border-radius: 5px;

` 
const InputSearcher = styled.input `
margin:0 10px;
background:rgb(73, 73, 73);
color:white;
padding:3px;
border-style: none;
`
const ButtonSearcher = styled.button `
margin:0 5px;
cursor:pointer;
background: #c80000;
border: none;
color: white;
border-radius: 5px;
font-weight:600;

`

export default function Home ({ coronaApi, news, info, newsInfo}) {
   
   const [search,setSearch] = useState({})
  
   function inputChange(e) {
     
     var str = e.target.value
     
     var splitStr = str.toLowerCase().split(' ');
     for (var i = 0; i < splitStr.length; i++) {
         
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); 
           
     }
    var str2 =  splitStr.join(' ')
    if(str2.length == 2){
      str2 =  str2.toUpperCase();
    }
   
     
     setSearch(str2)
      
        
  }
  function handleOnClick (e) {
    e.preventDefault()
    coronaApi(search)

    
  }
  function handleOnClickGlobal (e) {
    e.preventDefault()
    coronaApi("Global")

    
  }
   
    return (<>
       <MainHome>
           <InputButtonDiv >
           <InputSearcher type="text" onChange={ e => inputChange(e)}/>
          
           <ButtonSearcher onClick={ e => handleOnClick(e)}>      
               Search
                </ButtonSearcher>
                <ButtonSearcher onClick={e => handleOnClickGlobal(e) }>
                    Get mundial data
                    </ButtonSearcher>
           </InputButtonDiv>
           
       <Coronadata info={info}  newsInfo = {newsInfo} />
      
       
        {/* <button onClick={e => {
            e.preventDefault()
            news()}}>news</button> */}
       </MainHome>
       

       </>
    )
}
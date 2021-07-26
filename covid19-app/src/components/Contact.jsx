import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div `
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
text-align:center;
`
const DivDecoration = styled.div `
width:50%;
height: 50%;
margin: auto;
background: #272424;
padding: 20px;
border: 1px solid #474141;
border-radius: 10px;
`
const SendForm = styled.form `
margin-top: 50px;
height: 100px;
display:flex;
flex-direction: column;
justify-content: space-around;
`
const FormSection = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
`
const InputFormMail = styled.input `
margin-left: 14%;
background: rgb(73,73,73);
padding: 3px;
    border-style: none;
`
const InputFormPassword = styled.input `
margin-left: 5%;
background: rgb(73,73,73);
padding: 3px;
    border-style: none;

`
const PForm = styled.p `
margin:10px;
`
export function validate(input) {
  let errores = {};
  if (!input.mail) {
    errores.mail = 'mail is required';
  } else if (!/\S+@\S+\.\S+/.test(input.mail)) {
    errores.mail = 'mail is invalid';
  } if (!input.password) {
    errores.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errores.password = 'Password is invalid';
  } return errores;
}; 
export default function  Contact() {
  const [input, setInput] = React.useState({})
  const [errors, setError] = React.useState({})

  function onInputChange(evento) {
    evento.preventDefault()
    console.log(errors)
    console.log(input)
    
    setInput ( (prevState) => {
    
      return {...prevState,
[evento.target.name]: evento.target.value
    }})

    setError(validate({
      ...input,
      [evento.target.name]: evento.target.value
    }));
  }

  return (<MainDiv>
<DivDecoration>
      <div><h2>this is a example</h2>
      <h5>sign up to find out everything about what the coronavirus causes through this pandemic </h5></div>
      <SendForm>
          <FormSection>
        <label htmlFor="">mail:</label>
        <InputFormMail
          className={errors.mail && 'danger'} 
          type="text"
          name="mail"
          onChange={onInputChange}
          value={input.mail} />
           </FormSection>
      {errors.mail && (
      <PForm className="danger">{errors.mail}</PForm>
      )}
     
      <FormSection>
        <label htmlFor="">Password:</label>
        <InputFormPassword
          className={errors.password && 'danger'} 
          type="password"
          name="password"
          onChange={onInputChange}
          value={input.password}/>
           </FormSection>
      {errors.password && (
      <PForm className="danger">{errors.password}</PForm>
      )}
      
      </SendForm>
      </DivDecoration>
      </MainDiv>
  )
}
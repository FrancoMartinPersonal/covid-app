import React from 'react'
import styled from 'styled-components'
import img from '../img/coronavirus-5107715_1280.png'
import { Link } from 'react-router-dom'
export default function Nav () {

    const NavMain = styled.div `
    height:50px;
    width: 100%;
    background:#272424;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `
    const MainTitle = styled.div `
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    `
    const CoroTitle = styled.h1 `
    color: #e90c0cf2;
    
    `
    const DatesTitle = styled.h1 `
    color: #ffffff;
    
    `
    const Navbar = styled.nav `
    display: flex;
    margin-right: 25px;
    `
    const NavbarNames = styled.h3 `
    text-decoration: none;
    color:white;
    margin:10px 15px ;
    &:hover {
      color: #e90c0cf2;
  }
    
    `
    const ImgMain = styled.div `
      background-image: url(${img});
      margin: 0.85em 0.1em;
      
    background-size: cover;
    width:1.5em;
    height:1.5em;
    `
return (
    <NavMain>
        
        <Link to="/" style={{ textDecoration: 'none' }}> <MainTitle>
             <CoroTitle>C </CoroTitle>
             <ImgMain/>  
             <CoroTitle>rona</CoroTitle>
              <DatesTitle>datas</DatesTitle>
        </MainTitle>
        </Link>
    <Navbar>
        <Link to="/" style={{ textDecoration: 'none' }}><NavbarNames>home</NavbarNames></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}><NavbarNames>about</NavbarNames></Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}><NavbarNames>sign up</NavbarNames></Link>
        <Link to="/countrylist" style={{ textDecoration: 'none' }}><NavbarNames>countries list</NavbarNames></Link>
    </Navbar>
    <div></div> 
    {/* div para centrar el navbar */}
    </NavMain>
)
}
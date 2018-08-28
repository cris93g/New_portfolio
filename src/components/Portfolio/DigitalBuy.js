import React, {Component} from "react"
import styled from "styled-components";
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height:50vh;
  background-color:rgb(250, 250, 250);`;

const BottomWrapper = styled.section`
width: 100%;
margin: auto;
display: flex;
height:50vh;
background-color:white;`;


class DigitalBuy extends Component{
    render(){
        return(
            <div>
   <Nav/>
<Wrapper></Wrapper>

<BottomWrapper></BottomWrapper>


   <Footer/>
            </div>
        )
    }
}
export default DigitalBuy
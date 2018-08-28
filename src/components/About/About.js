import React, {Component} from "react"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import styled from "styled-components";
import './About.css';
const TopWrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height:65vh;
  background-color:white;`;


const Main= styled.section`
width:80%;
height:70%;
margin:auto;
display:flex;
`
const LeftM=styled.section`
width:50%;


heigh:100%;
`
const RightM=styled.section`
width:50%
heigh:100%;

`

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



class About extends Component {
    render() {
      return (
     
        <div className="About">
         <Nav/>
         <TopWrapper>
           <Main>
             <LeftM>
              <h3>About Me</h3><br/>
              <h4>I am developer based in  Dallas,Texas.</h4><br/>
              <p>I enjoy disecting difficult problems into their simplest terms.<br/>When i'm not conding, i love to play video games like<br/> hearthstone and league of legends,or you can always find <br/>me reading a good book.If you ever meet me <br/>dont be afraid to say a good joke</p>
            </LeftM>
            <RightM>
            <img className="pro"   src={require("./profile.png")} />
            
            </RightM>
           </Main>
          </TopWrapper>
          <Wrapper></Wrapper>
          <BottomWrapper></BottomWrapper>


          <Footer/>
        </div>
      
      );
    }
  }
  
  export default About;
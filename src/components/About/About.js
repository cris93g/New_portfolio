import React, {Component} from "react"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import styled from "styled-components";
import './About.css';
import {Link} from "react-router-dom"

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
  
  background-color:rgb(250, 250, 250);`
  ;

const BottomWrapper = styled.section`
width: 100%;
margin: auto;
display: flex;
height:50vh;

background-color:white;`;

const Circle = styled.section`
width:150px;
height:150px;
background-color:rgb(250, 250, 251);
box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);
display:flex;
margin-left:20px;
border-radius:50%;
flex-wrap: wrap;
`

const UpperR = styled.section`
/* width:80%;
height:40%; */
align-items: center;
  justify-content: center;
display:flex;
flex-direction: row;
margin:auto;
/* flex-wrap: wrap; */
`

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
          <Wrapper>
            <h1 className="wor">SKILLS</h1>
            <UpperR>
            <Circle className="circ"><a href="https://reactjs.org/"><img class="digitalB" src={require("./react.svg")} /></a></Circle >
            <Circle className="circ"><a href="https://redux.js.org/"><img class="digitalB" src={require("./redux.svg")} /></a></Circle>
            <Circle className="circ"><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><img class="digitalB" src={require("./html.svg")} /></a></Circle>
            <Circle className="circ"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"><img class="digitalB" src={require("./css.svg")} /></a></Circle>
            <Circle className="circ"><a href="https://es6.io/"><img class="digitalB" src={require("./js.svg")} /></a></Circle></UpperR><UpperR>
            <Circle className="circ"><a href="https://expressjs.com/"><img class="digitalB" src={require("./ex.svg")} /></a></Circle>
            <Circle className="circ"><a href="https://nodejs.org/en/"><img class="digitalB" src={require("./node.svg")} /></a></Circle>
            <Circle className="circ"><a href="https://www.postgresql.org/"><img class="digitalB" src={require("./post.svg")} /></a></Circle>
            <Circle className="circ"><a href="https://www.npmjs.com/"><img class="digitalB" src={require("./npm.svg")} /></a></Circle>
            <Circle className="circ"><a href="https://git-scm.com/"><img class="digitalB" src={require("./git.svg")} /></a></Circle></UpperR>
            </Wrapper>
          <BottomWrapper></BottomWrapper>


          <Footer/>
        </div>
      
      );
    }
  }
  
  export default About;
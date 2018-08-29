import React, {Component} from "react"
import styled from "styled-components";
import './MainTop.css';

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height:70vh;
  background-color:white;`;

const MiddleTop = styled.section`
margin-left:40%;
margin-top:280px;
color:white;
position:absolute;
`




class MainTop extends Component {
    render() {
      return (
       
        <div className="App">
          <Wrapper className="ima"><div><img class="fac" src={require("./face.png")} /></div><MiddleTop><div className="tex">Cristian Gonzalez</div> <br/><p>I am a full stack web developer</p><p>looking for a full time position</p></MiddleTop></Wrapper>
        </div>
      
      );
    }
  }
  
  export default MainTop;
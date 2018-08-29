import React, {Component} from "react"
import styled from "styled-components";
import './MainTop.css';

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height:65vh;
  background-color:white;`;





class MainTop extends Component {
    render() {
      return (
       
        <div className="App">
          <Wrapper><img className="guy"  src={require("./see.png")} /></Wrapper>
        </div>
      
      );
    }
  }
  
  export default MainTop;
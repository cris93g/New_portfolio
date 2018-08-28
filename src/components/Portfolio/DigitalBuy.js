import React, { Component } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 70vh;
  background-color: rgb(250, 250, 250);
`;

const BottomWrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 80vh;
  background-color: white;
`;
const RighttUpper = styled.section`
  width: 55%;
  display: flex;
  height: 65vh;
  margin: auto;
  background-color: blue;
`;

const LeftUpper = styled.section`
  width: 50vh;
  margin: auto;

  height: 30vh;
`;
const RightBottom = styled.section`
  width: 50vh;

  height: 40vh;
  margin: auto;
`;
const LeftBottom = styled.section`
  width: 100vh;
  display: flex;
  height: 80%;
  margin: auto;
`;

class DigitalBuy extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <LeftUpper>
            <h2>Testing</h2>
            <i>
              Went through all endpoints from the back-end using Postman to make
              sure all data that was returned back to myself and eventually the
              user was accurate.
            </i>
          </LeftUpper>
          <RighttUpper>
            <img class="digitalB" src={require("./endPoint.PNG")} />
          </RighttUpper>
        </Wrapper>

        <BottomWrapper>
          <LeftBottom>
            <img class="digitalB" src={require("./digital.PNG")} />
          </LeftBottom>
          <RightBottom>
            <h2>DigitalBuy</h2>
            <i>
              DigitalBuy was created with the idea of an e-commerce website for
              different types of electronics from Desktops to Laptops to even
              something like Hardware.
            </i>
            <br />
            <p>
              {" "}
              - Implemented PostgreSQL to hold and maintain all user data
              <br />- Used Redux for state management in front-end side
              <br />- Integrated Auth0 for user authentication and protection
              <br />- Implemented Express and Massive on top of Node.js
              <br />- Used Styled components to style different webpages
            </p>
          </RightBottom>
        </BottomWrapper>

        <Footer />
      </div>
    );
  }
}
export default DigitalBuy;

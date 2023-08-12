import React from 'react';
import styled from 'styled-components';
import { FaGift } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const CardContainer = styled.div`  
  background-color: #ffffff;
  margin-bottom: 20px; 
  box-sizing: border-box; 
  height: 550px;
  width: 98%;
  overflow: scroll;
  @media screen and (max-width: 767px){
    overflow: scroll;  
  }
`;

const CardHeader = styled.div`
  font-size: 20px; 
  font-weight: bold; 
  background-color: #394263;
  padding: 10px;
  color: white;
`;

const CardBody = styled.div`
  display: flex;
  font-size: 16px;
  padding: 10px 24px;
  margin-right: 30px;
    
  
`;
const ListTitle = styled.li`  
  list-style-type: none;
  display: flex;
  align-items: center; 
  margin-bottom: 75px; 
  justify-content: flex-end;  
  
  svg { 
    margin-right: 20px;  
    padding-left: 20px;
  }
  
  &:first-child {
    margin-top: 15px;
  }
`;




const ListItem = styled.li`  
  list-style-type: none; 
  align-items: center; 
  margin-bottom:20px; 
  padding-left:10px; 
  a {
    color: #3ec5e6;
    font-weight: bold;
  } 
`;

function Card() {
  return (
    <CardContainer>
      <CardHeader>Your Events</CardHeader>
      <CardBody>
        <div>
          <ul>
            <ListTitle><em>Today <FaGift /></em></ListTitle>
            <ListTitle><em>Tuesday <FaPlane /></em></ListTitle>
            <ListTitle><em>Thursday <FaBook /></em></ListTitle>
            <ListTitle><em>Friday <FaHeart /></em></ListTitle>
            <ListTitle><em>Saturday <FaHeart /></em></ListTitle>
          </ul>
        </div>
        <div>
          <ListItem> <a>Jonathan G</a><br />
            Going away party at 8:30pm. Bring a friend!<br />
            1404 Gibson St
          </ListItem>
          <ListItem> <a>Matthew H</a><br />
            Flying to Bora Bora at 4:30pm<br />
            Delta, Gate 278<br />
          </ListItem>
          <ListItem><a>National Institute of Science</a><br />
            Join the institute for an in-depth look at Stephen Hawking<br />
            7:30pm, Carnegie Center for Science<br />
          </ListItem>
          <ListItem><a>24th Annual Heart Ball</a><br />
            Join us and contribute to your favorite local charity.<br />
            6:45pm, Austin Convention Ctr<br />
          </ListItem>
          <ListItem><a>Little Rock Air Show</a><br />
            See the Blue Angels fly with roaring thunder<br />
            11:00pm, Jacksonville Airforce Base<br />
          </ListItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Card;
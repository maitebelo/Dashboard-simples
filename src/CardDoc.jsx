import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  max-width: 5500px; // ou outra largura máxima adequada
  background-color: #ffffff;
  margin-bottom: 20px;
  box-sizing: border-box;
  margin-left: 10px;
  overflow: hidden;
  @media screen and (max-width: 767px){  
    width: 96%;
  }
`;

const CardHeader = styled.div`
  font-size: 20px; 
  font-weight: bold; 
  background-color: #394263;
  padding: 10px;
  color: white; 
  width: 100%;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding: 24px;
  margin-right: 30px;
  width: 98%;
  overflow: scroll;
  @media screen and (max-width: 500px){
    width:100%;
  }
`;

const ListTitle = styled.li`  
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-bottom: 25px; 
  justify-content: flex-end; 
  width: 200px; 
  min-width: 150px;
  svg { 
    margin-right: 20px;  
    padding-left: 20px;
  }
  
  &:first-child {
    margin-top: 15px;
  }
`;

const ListImage = styled.img`
  width: 80px;
  height: 80px;
`;

const ListText = styled.span`
  margin-top: 20px;
`;

function CardDoc() {
  return (
    <CardContainer>
      <CardHeader>Recent Documents</CardHeader>
      <CardBody>
        <ListTitle>
          <ListImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" />
          <ListText>Document 1</ListText>
        </ListTitle>
        <ListTitle>
          <ListImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" />
          <ListText>Document 2</ListText>
        </ListTitle>
        <ListTitle>
          <ListImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" />
          <ListText>Document 3</ListText>
        </ListTitle>
        <ListTitle>
          <ListImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png" />
          <ListText>Document 4</ListText>
        </ListTitle>
      </CardBody>
    </CardContainer>
  );
}

export default CardDoc;

import React from 'react';
import styled from 'styled-components';
import { Chart } from "react-google-charts";

const CardContainer1 = styled.div`  
  background-color: #ffffff;
  margin-bottom: 20px; 
  box-sizing: border-box;
  margin-left: 10px; 
  width: 98%;
  @media screen and (max-width: 767px){
     width: 96%;
  }
`;
const CardHeader1 = styled.div`
  font-size: 20px; 
  font-weight: bold; 
  background-color: #394263;
  padding: 10px;
  color: white;
`;

const CardBody1 = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding: 24px;
  margin-left: 10px;
  margin-right: 10px; 
  overflow: scroll;
  box-sizing: border-box;
  @media screen and (max-width: 500px){
    width:100%;
  }
`;

const data = [["Year", "Sales", "Expenses", "Profit"],
["Jan", 1000, 100, 100],
["Fev", 1170, 100, 100],
["Mar", 660, 100, 100],
["Apr", 1030, 100, 100],
["May", 1030, 230, 100],
["Jun", 1030, 540, 100],
["Jul", 1030, 760, 100],
["Ago", 1030, 200, 100],
];

const options = {
  title: "Monthly Spending",
  subtitle: "Sales, Expenses, and Profit: 2014-2017",
  hAxis: { title: "Year", minValue: null, maxValue: 4 },
  vAxis: { title: "Amount", format: "currency" },
  bar: { groupWidth: '75%' },
  legend: { position: "none" },
};


function CardChart() {
  return (
    <CardContainer1>
      <CardHeader1>Monthly Spending</CardHeader1>
      <CardBody1>
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={data}
          options={options} 
        />
      </CardBody1>
    </CardContainer1>
  );
}
export default CardChart;

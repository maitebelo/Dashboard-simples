import React from 'react'; 

function OverviewCard(props) {
  return (
    <div className="overviewcard">
        <p className="overviewcard__icon">{props.title}</p>
        <p className="overviewcard__info">{props.subtitle}</p>
    </div>
  );
}

export default OverviewCard;
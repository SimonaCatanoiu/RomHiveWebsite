import React from "react";
import "./ServiceCard.css";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ExploreIcon from '@mui/icons-material/Explore';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


const ServiceCard = ({item}) => {

    const {type,title,description} = item
    let icon;

    switch (type) {
      case "explore":
        icon = <TravelExploreIcon/>;
        break;
      case "guide":
        icon = <ExploreIcon/>;
        break;
      case "custom":
        icon = <SupportAgentIcon/>;
        break;
      default:
        icon = <span>No icon selected</span>;
    }

    return <div className="service__item">
        <span className="d-inline-flex align-items-center">
          <div className="service__icon">{icon}</div>
          <h5 className="mx-2">{title}</h5>
        </span>
        <p>{description}</p>
    </div>;
};

export default ServiceCard;
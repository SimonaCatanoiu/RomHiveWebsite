import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "react-bootstrap";
import  "./ServiceCard.css";

const servicesData = [
    {
        type: "explore",
        title:"Explore nearby",
        description:"Looking for some adventure without having to travel too far? Let us be your personal compass with our service that finds and books local activities for you! From quirky museums to thrilling outdoor expeditions, let's unlock the endless possibilities of your own backyard.",
    },
    {
        type: "guide",
        title:"Best Tour Guide",
        description:"Our expert guides are passionate about sharing their insider knowledge, taking you on a journey of discovery to uncover hidden gems and off-the-beaten-path destinations that you won't find in guidebooks. So why settle for a run-of-the-mill tour? Let us show you the true magic of every place we visit!",
    },
    {
        type: "custom",
        title:"Customization",
        description:"Ready for an adventure that's tailored just for you? We take your unique preferences and interests into account, creating a one-of-a-kind journey that's perfectly crafted to meet your needs. Whether you're looking for a romantic getaway or an action-packed excursion, let us help you create memories that will last a lifetime!",
    }
]

const ServiceList = () =>{
    return <>
    {
        servicesData.map((item,index)=>
        <Col lg='3' key={index}>
            <ServiceCard item={item}></ServiceCard>
        </Col>
        )
    }
    </>

};

export default ServiceList;
import React from "react";
import { useNavigate } from "react-router-dom"; 
import './Cities.css';

const stories = [

  {
    title: "New York City",
    description: "See the impact of climate changes on NYC.",
    image: "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2022/06/1140-nyc-skyline.imgcache.rev.web.1000.575.jpg",
    path: "/NewYork"
  },{
    title: "Bangkok",
    description: "See the impact of climate changes on Bangkok.",
    image: "https://t3.ftcdn.net/jpg/02/26/13/62/360_F_226136256_G79GYJ1EQd3pQMA5zaN4VFjypoMgziL6.jpg",
    path: "/Bangkok"
  },
  // {
  //   title: "Miami",
  //   description: "See the impact of climate changes on Miami.",
  //   image: "https://www.webuildvalue.com/wp-content/uploads/2024/03/Miami-Skyline.jpg",
  //   path: "/Miami"
  // }
];


const ClimateStories = () => {
  const navigate =useNavigate();
  const handleCardClick =(path)=>{
    navigate(path)
  }
  return (
  <div className="backround">
    <h1 style={{ textAlign: 'center' }}>Climate Changes Facing Cities</h1>
    <div className="climate-stories">
      {stories.map((story, index) => (
        <div key={index} className="story-card" onClick={()=>handleCardClick(story.path)}>
          <img src={story.image} alt={story.title} />
          <h3>{story.title}</h3>
          <p>{story.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ClimateStories;

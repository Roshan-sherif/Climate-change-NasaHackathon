import React from "react";
import { useNavigate } from "react-router-dom";
import './ClimateStories.css';

const stories = [
  {
    title: "Rising Sea Levels",
    description: "Explore the effects of rising sea levels on coastal cities.",
    image: "https://masslandlords.net/app/uploads/sea-level-rising-image-1-cc-by-sa-123rf.jpg",
    path: "/Sealevel"
  },
  {
    title: "Wildfires and Climate",
    description: "Learn how climate change is causing more wildfires.",
    image: "https://d3i6fh83elv35t.cloudfront.net/static/2022/02/2022-02-23T055746Z_1588474601_RC2DKS986O3N_RTRMADP_3_CLIMATE-CHANGE-WILDFIRE-1024x634.jpg",
    path: "/wildfires"
  },
  {
    title: "The Melting Arctic",
    description: "See the impact of global warming on Arctic ice.",
    image: "https://files.worldwildlife.org/wwfcmsprod/images/sea_ice_and_seal_WW264762_Chris_Johnson/hero_small/7v1r5y5sud_Medium_WW264762.jpg",
    path: "/melting-arctic"
  }
];


const ClimateStories = () => {
  const navigate =useNavigate();
  const handleCardClick =(path)=>{
    navigate(path)
  }
  return (
  <div className="backround">
    <h1 style={{ textAlign: 'center' }}>Side Effect of Climate Changes</h1>
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

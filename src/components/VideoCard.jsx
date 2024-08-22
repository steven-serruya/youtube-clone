import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card 
  sx={{ 
    width: { xs: '300px', sm: '320px', md: "320px" }, 
    boxShadow: "none", 
    borderRadius: '20px', 
    margin: 'auto', 
    height: '320px', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-between', 
    marginBottom: '16px',  // Replace gap with margin for spacing between cards
  }}
>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
        alt={snippet?.title} 
        sx={{ 
          width: '100%', 
          height: '180px' 
        }} 
      />
    </Link>
    <CardContent 
      sx={{ 
        backgroundColor: "#1E1E1E", 
        flexGrow: 1, 
        padding: '20px' 
      }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF" noWrap>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray" noWrap>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;

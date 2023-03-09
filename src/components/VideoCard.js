import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { backgroundColor_dark } from "../utils/colors";

const VideoCard = ({ video }) => {
  const {
    channelId,
    channelTitle,
    description,
    liveBroadcastContent,
    publishTime,
    publishedAt,
    thumbnails,
    title,
  } = video.snippet;
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: "320px", },
        boxShadow: "none",
        borderRadius: "10px",
      }}
    >
      <Link to={video.id ? `/videos/${video.id}` : "notfound"}>
        <CardMedia
          image={thumbnails?.high?.url}
          alt={title}
          sx={{
            width: { xs: '100%', sm: '358px'},
            height: 180,
          }}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: `${backgroundColor_dark}`,
          height: "106px",
        }}
      >
        <Link to={video.id ? `/videos/${video.id}` : "notfound"}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            align="left"
          >
            {title.slice(0, 50)}
          </Typography>
        </Link>

        <Link to={channelId ? `/channel/${channelId}` : "notfound"}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            align="left"
          >
            {channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

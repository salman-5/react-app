import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 450, height: 550 }}
      class="h-[550px] justify-end items-start flex flex-col backdrop-blur-sm shadow-2xl overflow-hidden"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            class="line-clamp-5"
          >
            {props.descriptions}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            const route = props.title.split(" ")[0].toLowerCase();
            navigate(`/${route}`);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

import React from "react";
import "./Project.css";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import skyseer from "../../assests/skyseer.png";
import moviebox from "../../assests/moviebox.png";
import visio from "../../assests/visio.png";

const Project = () => {
  const Projects = [
    {
      title: "Skyseer",
      description:
        "Vanilla JS weather app utilizes OpenWeatherMap, Open-Meteo APIs.",
      tools: "HTML CSS JS",
      link: "sky-seer.vercel.app",
      imageUrl: skyseer,
    },
    {
      title: "Moviebox",
      description:
        "Vanilla JS weather app utilizes OpenWeatherMap, Open-Meteo APIs.",
      tools: "react firebase",
      link: "https://movie-app-273e2.web.app/",
      imageUrl: moviebox,
    },
    {
      title: "Visio",
      description:
        "Visionary photo-sharing platform. Upload. Curate. Enhance. Socialize.",
      tools: "react daisyUI tailwindcss firebase",
      link: "image-gallery-cb37d.web.app/",
      imageUrl: visio,
    },
  ];
  return (
    <div className="projects">
      <div className="sectiontitle__head">
        <h2>#Projects</h2>
        <div className="horizontal__line"></div>
        <span>
          View all <ArrowRightAltSharpIcon sx={{ fontSize: 41 }} />
        </span>
      </div>

      <Grid container spacing={1} className="project-list">
        {Projects.map((project, index) => (
          <Card className="project-card" key={index} sx={{ maxWidth: 360 }}>
            <CardMedia
              className="card-media"
              sx={{ height: 230 }}
              image={project.imageUrl}
              title={project.title}
            />
            <CardContent className="card-content">
              <Typography gutterBottom variant="h7" component="div">
                {project.tools}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">live</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Project;

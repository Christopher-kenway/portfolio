import React, { useState } from "react";
import "./Project.css";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Projects } from "../../data";

const Project = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="mt-14 py-14 sm:py-20">
      <div className="sectiontitle__head">
        <h2 className="text-white">
          <span className="text-purple">#</span>Projects
        </h2>
        <div className="horizontal__line"></div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-14">
        {Projects.map((project, index) => (
          <Card className="project-card h-fit lg:w-full" key={index}>
            <div
              className="aspect-h-1 aspect-w-1 overflow-hidden
              lg:aspect-none h-full"
            >
              <img
                className="h-full w-full object-cover object-center lg:h-60 lg:w-full"
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
            <CardContent className="card-content">
              <Typography
                gutterBottom
                variant="h7"
                className="h-fit flex items-center"
              >
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
              <Button size="small">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live
                </a>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;

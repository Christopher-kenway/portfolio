import React from "react";
import "./Skills.css";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Skills = () => {
  const skillContent = [
    {
      title: "Languages",
      tools: "Javascript Python TypeScript Lua",
    },
    {
      title: "Databases",
      tools: "SQLite Mongo POSTgreSQL Firebase",
    },
    {
      title: "Tools",
      tools:
        "VScode Bootstrap Tailwindcss MaterialUI DaisyUI FramerMotion GASP",
    },
    {
      title: "Other",
      tools: "HTML CSS SCSS RestAPI EJS",
    },
    {
      title: "Frameworks",
      tools: "ReactJS",
    },
  ];

  return (
    <>
      <div className="sectiontitle__head">
        <h2># Skills</h2>
        <div className="horizontal__line"></div>
      </div>
      <Grid container spacing={2}>
        {skillContent.map((skill, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="skill__content"
            key={index}
          >
            <CardContent className="cardContent">
              <Typography gutterBottom className="title">
                {skill.title}
              </Typography>
              <Typography gutterBottom className="tools">
                {skill.tools}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Skills;

import React from "react";
import "./Skills.css";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Group from "../../assets/Group.png";
import { skillContent } from "../../data";

const Skills = () => {
  return (
    <div className="py-10 sm:py-14">
      <div className="sectiontitle__head">
        <h2 className="text-white">
          <span className="text-purple">#</span> Skills
        </h2>
        <div className="horizontal__line"></div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-14">
        <img className="hidden md:hidden sm:hidden lg:block" src={Group} />
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          spacing={2}
        >
          {skillContent.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
      </div>
    </div>
  );
};

export default Skills;

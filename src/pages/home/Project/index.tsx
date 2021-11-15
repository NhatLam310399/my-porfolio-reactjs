import { Carousel } from "@trendyol-js/react-carousel";
import { ProjectContainer, BoxProject } from "./styles";
import HeaderSession from "components/HeaderSession";
import ProjectCard, { IProject } from "components/ProjectCard";
import { useState } from "react";

import TuyenDungLogo from "asset/images/logo-tuyendung.png";
import KtvLogo from "asset/images/logo-ktv.jpg";
import KingifyLogo from "asset/images/logo-kingify.png";
import EverLogo from "asset/images/logo-ever.png";
interface IProjectProps {}

const Project: React.FC<IProjectProps> = (props) => {
  const projectList: IProject[] = [
    {
      name: "Tuyendung",
      detail: <div>detail</div>,

      urlImage: TuyenDungLogo,
      color: "#D7D7D7",
    },
    {
      name: "KTV app",
      detail: <div>detail</div>,

      urlImage: KtvLogo,
      color: "#fff",
    },
    {
      name: "Kingify",
      detail: <div>detail</div>,

      urlImage: KingifyLogo,
      color: "#fff",
    },
    {
      name: "Ever play",
      detail: <div>detail</div>,

      urlImage: EverLogo,
      color: "#FF3C3C",
    },
  ];
  return (
    <ProjectContainer>
      <HeaderSession color="secondary-1" text="project" />
      <BoxProject>
        <Carousel
          show={4}
          infinite
          transition={1}
          swiping
          swipeOn={1}
          responsive
          slide={1}
          className="gap-2"
        >
          {projectList.map((project) => (
            <ProjectCard project={project} />
          ))}
        </Carousel>
      </BoxProject>
    </ProjectContainer>
  );
};

export default Project;

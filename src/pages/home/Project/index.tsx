import { Carousel } from "@trendyol-js/react-carousel";
import {
  ProjectContainer,
  BoxProject,
  Detail,
  DetailContainer,
  Highlight,
} from "./styles";
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
      detail: (
        <DetailContainer>
          <Detail>
            <Highlight>Nhà tuyển dụng</Highlight> có thể đăng bài tuyển dụng và
            đánh giá ứng viên.
          </Detail>
          <Detail>
            <Highlight>Người tìm việc</Highlight> tìm công việc và ứng tuyển.
          </Detail>
        </DetailContainer>
      ),
      urlImage: TuyenDungLogo,
      color: "#D7D7D7",
    },
    {
      name: "KTV app",
      detail: (
        <DetailContainer>
          <Detail>
            <Highlight>Manager Website:</Highlight> quản lý số lượng phòng và
            quản lý được thông tin đặt phòng của khách hàng.
          </Detail>
        </DetailContainer>
      ),

      urlImage: KtvLogo,
      color: "#fff",
    },
    {
      name: "Kingify",
      detail: (
        <DetailContainer>
          <Detail>
            <Highlight>Seller Website:</Highlight> quản lý được thông tin của
            người dùng đặt hàng và tự thiết kế sản phẩm theo mong muốn và đăng
            bán.
          </Detail>
        </DetailContainer>
      ),

      urlImage: KingifyLogo,
      color: "#fff",
    },
    {
      name: "Ever play",
      detail: (
        <DetailContainer>
          <Detail>
            <Highlight>Admin Website:</Highlight> quản lý người dùng, quản lý
            sân, số lượng sân và thông tin đặt sân của khách hàng.
          </Detail>
        </DetailContainer>
      ),

      urlImage: EverLogo,
      color: "#FF3C3C",
    },
  ];
  return (
    <ProjectContainer id="project">
      <HeaderSession color="secondary-1" text="project" />
      <BoxProject>
        <Carousel
          show={3.5}
          infinite
          transition={1}
          swiping
          swipeOn={1}
          responsive
          slide={2}
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

import { useState } from "react";
import { ProjectCardContainer, Card, Detail } from "./styles";

interface IProjectCardProps {
  project: IProject;
}
export interface IProject {
  name: string;
  urlImage: string;
  detail: JSX.Element;
  color: string;
}
const ProjectCard: React.FC<IProjectCardProps> = props => {
  const { children, project } = props;
  const [view, setView] = useState(false);
  return (
    <ProjectCardContainer view={view} onClick={() => setView(!view)}>
      <Card.Container>
        <Card.LogoContainer view={view} color={project.color}>
          <Card.Logo view={view} src={project?.urlImage} />
        </Card.LogoContainer>
        <Card.Divider show={view}>{`>>`}</Card.Divider>
        <Card.Name view={view}>{project?.name}</Card.Name>
      </Card.Container>
      <Detail.Container view={view}>{project.detail}</Detail.Container>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

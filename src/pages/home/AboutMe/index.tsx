import { AboutMeContainer, Description } from "./styles";
import HeaderSession from "components/HeaderSession";
import { Icons } from "asset/svg";

interface IAboutMeProps {}

const AboutMe: React.FC<IAboutMeProps> = props => {
  return (
    <AboutMeContainer id="aboutMe">
      <HeaderSession text="About me" />
      <Description>
        Currently, I have been working as Front-end Web Developer for a while
        and I always try to learn and improve my knowledge to complete the
        assigned tasks, create good products for the company and users. In the
        future I want to go to Full-stack so I need to have a solid grasp of
        Front-end Web Developer knowledge. So I want to find a suitable company
        to develop myself.
      </Description>
    </AboutMeContainer>
  );
};

export default AboutMe;

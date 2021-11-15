import { AboutMeContainer, Description, Other, Line } from "./styles";
import HeaderSession from "components/HeaderSession";
import { Icons } from "asset/svg";

interface IAboutMeProps {}

const AboutMe: React.FC<IAboutMeProps> = (props) => {
  return (
    <AboutMeContainer className="container">
      <HeaderSession text="About me" />
      <Description>
        Currently, I have been working as Front-end Web Developer for a while
        and I always try to learn and improve my knowledge to complete the
        assigned tasks, create good products for the company and users. In the
        future I want to go to Full-stack so I need to have a solid grasp of
        Front-end Web Developer knowledge. So I want to find a suitable company
        to develop myself.
      </Description>
      <Line>
        <Icons.SeparatorIcon />
      </Line>
      {/* <Other.Container>
        <Other.Title>Development</Other.Title>
        <Other.Desc>
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </Other.Desc>
        <Other.Icon>
          <Icons.DevIcon />
        </Other.Icon>
      </Other.Container> */}
    </AboutMeContainer>
  );
};

export default AboutMe;

import { AboutMeContainer, Description, Other, Line } from "./styles";
import HeaderSession from "components/HeaderSession";
import { Icons } from "asset/svg";

interface IAboutMeProps {}

const AboutMe: React.FC<IAboutMeProps> = props => {
  return (
    <AboutMeContainer className="container">
      <HeaderSession text="About me" />
      <Description>
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
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

import {
  ExperienceContainer,
  Company,
  Desc,
  Position,
  Time,
  LeftSide,
  RightSide,
  MobileTime,
} from "./styles";

interface IExperienceProps {
  exp: IExperience;
  className?: string;
}
export interface IExperience {
  company: string;
  time: string;
  position: string;
  description: string[];
}
const Experience: React.FC<IExperienceProps> = (props) => {
  const { className = "", children, exp } = props;
  return (
    <ExperienceContainer className={className}>
      <LeftSide>
        <Company>{exp.company}</Company>
        <MobileTime>{exp.time}</MobileTime>
        <Position>{exp.position}</Position>
        {exp.description.map((desc) => (
          <Desc>{desc}</Desc>
        ))}
      </LeftSide>
      <RightSide>
        <Time>{exp.time}</Time>
      </RightSide>
    </ExperienceContainer>
  );
};

export default Experience;

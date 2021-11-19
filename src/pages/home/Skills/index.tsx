import { SkillsContainer } from "./styles";
import HeaderSession from "components/HeaderSession";
import SkillsTemplate, { ISkill } from "components/SkillTemplate";
import { Icons } from "asset/svg";

interface ISkillsProps {}

const Skills: React.FC<ISkillsProps> = (props) => {
  return (
    <SkillsContainer id="skills" className="container">
      <HeaderSession text="Skills" />
      <SkillsTemplate title="Using now" skillList={usingNowList} />
      <SkillsTemplate title="Learning" skillList={learning} />
      <SkillsTemplate title="Other skills" skillList={others} />
    </SkillsContainer>
  );
};

export default Skills;
const usingNowList: ISkill[] = [
  {
    icon: <Icons.Logo.HTMLIcon />,
    name: "HTML5",
  },
  {
    icon: <Icons.Logo.CssIcon />,
    name: "css3",
  },
  {
    icon: <Icons.Logo.SassIcon />,
    name: "sass",
  },
  {
    icon: <Icons.Logo.JsIcon />,
    name: "javascript",
  },
  {
    icon: <Icons.Logo.ReactJsIcon />,
    name: "React",
  },
  {
    icon: <Icons.Logo.BootstrapIcon />,
    name: "bootstrap",
  },
  {
    icon: <Icons.Logo.GitIcon />,
    name: "git",
  },
  {
    icon: <Icons.Logo.FigmaIcon />,
    name: "figma",
  },
  {
    icon: <Icons.Logo.TSIcon />,
    name: "Typescript",
  },
  {
    icon: <Icons.Logo.NextIcon />,
    name: "Next js",
  },
  {
    icon: <Icons.Logo.GrapQlIcon />,
    name: "GraphQL",
  },
];
const learning: ISkill[] = [
  {
    icon: <Icons.Logo.ReactJsIcon />,
    name: "React",
  },

  {
    icon: <Icons.Logo.TSIcon />,
    name: "Typescript",
  },
  {
    icon: <Icons.Logo.NextIcon />,
    name: "Next js",
  },
];
const others: ISkill[] = [
  {
    icon: <Icons.Logo.ResearchIcon />,
    name: "research",
  },

  {
    icon: <Icons.Logo.EnIcon />,
    name: "English basic",
  },
];

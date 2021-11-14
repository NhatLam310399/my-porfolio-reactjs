import {
  SkillTemplateContainer,
  Item,
  ItemIcon,
  ItemName,
  List,
  Title,
} from "./styles";

interface ISkillTemplateProps {
  title: string;
  skillList?: ISkill[];
  className?: string;
}
export interface ISkill {
  icon: JSX.Element;
  name: string;
}
const SkillTemplate: React.FC<ISkillTemplateProps> = props => {
  const { title = "", skillList = [], className = "" } = props;
  return (
    <SkillTemplateContainer className={className}>
      <Title>{title}</Title>
      <List>
        {skillList.map(skill => (
          <Item>
            <ItemIcon>{skill.icon}</ItemIcon>
            <ItemName>{skill.name}</ItemName>
          </Item>
        ))}
      </List>
    </SkillTemplateContainer>
  );
};

export default SkillTemplate;

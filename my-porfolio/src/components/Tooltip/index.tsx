import { ToolTipContainer, Item, Content } from "./styles";

interface IToolTipProps {
  item: JSX.Element;
  className?: string;
  text: string;
}
const ToolTip: React.FC<IToolTipProps> = props => {
  const { children, text = "", item, className = "" } = props;
  return (
    <ToolTipContainer className={className}>
      <Item>{item}</Item>
      <Content>{text}</Content>
    </ToolTipContainer>
  );
};

export default ToolTip;

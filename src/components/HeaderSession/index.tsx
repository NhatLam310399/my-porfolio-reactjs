import { HeaderSessionContainer, Box, Text } from "./styles";

interface IHeaderSessionProps {
  text: string;
  color?: "primary" | "secondary-1";
  className?: string;
}

const HeaderSession: React.FC<IHeaderSessionProps> = (props) => {
  const { text = "", color = "primary", className } = props;
  return (
    <HeaderSessionContainer className={className}>
      <Box color={color}>
        <Text color={color}>{text}</Text>
      </Box>
    </HeaderSessionContainer>
  );
};

export default HeaderSession;

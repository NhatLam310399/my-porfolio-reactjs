import { HeaderSessionContainer, Box, Text } from "./styles";

interface IHeaderSessionProps {
  text: string;
  className?: string;
}

const HeaderSession: React.FC<IHeaderSessionProps> = props => {
  const { text = "", className } = props;
  return (
    <HeaderSessionContainer className={className}>
      <Box>
        <Text>{text}</Text>
      </Box>
    </HeaderSessionContainer>
  );
};

export default HeaderSession;

import { StartScreenContainer } from "./styles";

interface IStartScreenProps {
  open: boolean;
  className?: string;
}

const StartScreen: React.FC<IStartScreenProps> = props => {
  const { open = true, className = "", children } = props;
  return (
    <StartScreenContainer className={className} open={open}>
      {children}
    </StartScreenContainer>
  );
};

export default StartScreen;

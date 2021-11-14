import Typing from "react-typing-animation";
interface ITypingTextProps {
  className?: string;
}
const TypingText: React.FC<ITypingTextProps> = props => {
  const { children, className = "" } = props;

  return <Typing className={className}>{children}</Typing>;
};
export default TypingText;

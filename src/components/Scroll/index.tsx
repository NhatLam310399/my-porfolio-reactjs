import { ScrollContainer, Box, Line, Mouse, Divider } from "./styles";
import { Icons } from "asset/svg";
interface IScrollProps {}

const Scroll: React.FC<IScrollProps> = (props) => {
  return (
    <ScrollContainer>
      <Box>
        <Mouse>
          <Icons.MouseIcon fill="text-secondary-1" width="50px" height="50px" />
        </Mouse>
        <Line>
          <Divider />
        </Line>
      </Box>
    </ScrollContainer>
  );
};

export default Scroll;

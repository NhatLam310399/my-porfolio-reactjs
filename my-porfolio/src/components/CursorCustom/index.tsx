import useCursorCustom from "hook/useMouseCustom";
import { Dot, Ring } from "./styles";
interface ICursorCustomProps {}

const CursorCustom: React.FC<ICursorCustomProps> = props => {
  const { x, y } = useCursorCustom();
  return (
    <>
      <Ring style={{ left: `${x}px`, top: `${y}px` }} className="ring"></Ring>
      <Dot className="dot" style={{ left: `${x}px`, top: `${y}px` }}></Dot>
    </>
  );
};

export default CursorCustom;

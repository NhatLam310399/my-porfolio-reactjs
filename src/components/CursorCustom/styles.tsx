import styled from "styled-components";
import tw from "twin.macro";

export const Ring = styled.div`
  ${tw`hidden laptop:block`}
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition-duration: 0.1s;

  z-index: 999;
  pointer-events: none;
  mix-blend-mode: difference;
  background-color: red;
`;
export const Dot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
`;

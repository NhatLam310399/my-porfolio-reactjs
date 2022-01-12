import styled from "styled-components";
import tw from "twin.macro";

export const ScrollContainer = styled.div`
  ${tw`absolute bottom-0 left-1/2`}
  transform:translateX(-50%);
`;
export const Box = styled.div`
  ${tw`flex flex-col items-center`}
`;
export const Mouse = styled.div`
  ${tw``}
`;
export const Line = styled.div`
  ${tw`relative w-full h-7 overflow-hidden`}
`;
export const Divider = styled.div`
  ${tw`absolute top-0 left-1/2 w-[2px] h-[80%] bg-[#fff] laptop:bg-secondary-1`}
  animation: scroll 1.2s infinite linear;
  @keyframes scroll {
    0% {
      top: 0;
      opacity: 1;
    }

    50% {
      top: 50%;
      opacity: 0.5;
    }

    100% {
      top: 100%;
      opacity: 0;
    }
  }
`;

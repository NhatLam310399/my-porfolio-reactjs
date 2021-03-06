import styled from "styled-components";
import tw from "twin.macro";

export const HeaderSessionContainer = styled.div`
  ${tw`flex justify-center w-full mb-4 phone:mb-7 `}
`;
export const Box = styled.div<{ color: string }>`
  ${tw`phone:w-40 phone:h-10 w-30 h-8 flex justify-center items-center border-[8px]`}

  ${({ color }) => color === "primary" && `border: 8px solid #000000 `}
  ${({ color }) => color === "secondary-1" && `border:8px solid #D7D7D7 `}
`;
export const Text = styled.h2<{ color: string }>`
  ${tw`text-4xl  tracking-[15px] uppercase`}
  ${({ color }) => color === "primary" && tw`text-primary `}
  ${({ color }) => color === "secondary-1" && tw`text-secondary-1 `}
`;

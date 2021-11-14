import styled from "styled-components";
import tw from "twin.macro";

export const HeaderSessionContainer = styled.div`
  ${tw`w-full flex justify-center `}
`;
export const Box = styled.div`
  ${tw`w-40 h-10 flex justify-center items-center `}
  border: 8px solid #000;
`;
export const Text = styled.h2`
  ${tw`text-4xl text-primary tracking-[15px] uppercase`}
`;

import styled from "styled-components";
import tw from "twin.macro";

export const StartScreenContainer = styled.div<{ open: boolean }>`
  ${tw`absolute flex items-center justify-center left-0 transform duration-500 top-0 fixed bottom-0 bg-primary right-0`}
  ${({ open }) => !open && "transform: translateX(-100%);"}
`;

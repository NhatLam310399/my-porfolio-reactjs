import styled from "styled-components";
import tw from "twin.macro";

export const StartScreenContainer = styled.div<{ open: boolean }>`
  ${tw`fixed absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center duration-500 transform bg-primary`}
  ${({ open }) => !open && "transform: translateY(-100%);"}
`;

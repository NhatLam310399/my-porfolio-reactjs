import styled from "styled-components";
import tw from "twin.macro";

export const HomeContainer = styled.div<{ open: boolean }>`
  ${tw`w-full overflow-hidden top-0 left-0 bottom-0 right-0 transform duration-500`}
  ${({ open }) =>
    !open
      ? "transform: translateX(0); position:relative;"
      : "transform: translateX(100%);position:fixed;"}
`;

export const Typing = {
  Container: styled.div`
    ${tw`w-full h-full max-w-40`}
  `,
  Name: styled.h1`
    ${tw`text-secondary-1 text-xxl`}
  `,
  Text: styled.h2`
    ${tw`text-secondary-1 mt-1 text-xl`}
  `,
};
export const CursorCustom = styled.div``;

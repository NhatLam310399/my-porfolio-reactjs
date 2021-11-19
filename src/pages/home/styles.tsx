import styled from "styled-components";
import tw from "twin.macro";

export const HomeContainer = styled.div<{ open: boolean }>`
  ${tw`top-0 bottom-0 left-0 right-0 w-full overflow-hidden duration-300 transform`}
  ${({ open }) =>
    !open
      ? "transform: translateY(0); position:relative;"
      : "transform: translateY(100%);position:fixed;"}
`;

export const Typing = {
  Container: styled.div`
    ${tw`w-full h-full mx-auto max-w-[1110px]`}
  `,
  Name: styled.h1`
    ${tw`text-secondary-1 text-[80px]`}
  `,
  Text: styled.h2`
    ${tw`text-[60px] text-secondary-1`}
  `,
};
export const CursorCustom = styled.div``;
export const Line = styled.div`
  ${tw`flex justify-center w-full my-12`}
`;

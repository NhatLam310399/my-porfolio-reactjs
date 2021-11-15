import styled from "styled-components";
import tw from "twin.macro";

export const HomeContainer = styled.div<{ open: boolean }>`
  ${tw`top-0 bottom-0 left-0 right-0 w-full overflow-hidden duration-500 transform`}
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
    ${tw`mt-1 text-xl text-secondary-1`}
  `,
};
export const CursorCustom = styled.div``;
export const Line = styled.div`
  ${tw`flex justify-center w-full my-12`}
`;

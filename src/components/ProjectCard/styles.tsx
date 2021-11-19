import styled from "styled-components";
import tw from "twin.macro";

export const ProjectCardContainer = styled.div<{ view: boolean }>`
  ${tw`relative z-30 flex items-center justify-center overflow-hidden h-15`}

  border: 4px solid #d7d7d7;
`;

export const Card = {
  Container: styled.div`
    ${tw`relative flex items-center justify-start w-full h-full gap-2 pl-0 border-none `}
  `,
  Name: styled.h3<{ view: boolean }>`
    ${tw`m-0 ml-16 font-bold text-secondary-1 text-xxl`}
  `,
  Logo: styled.img<{ view: boolean }>`
    ${tw`object-cover w-full max-w-11 `}
    ${({ view }) =>
      view
        ? "transform: rotate(360deg); transition:1s;"
        : `transform: rotate(0deg); transition:1s;`};
  `,
  LogoContainer: styled.div<{ color: string; view: boolean }>`
    ${tw`absolute top-0 flex items-center justify-center h-full overflow-hidden duration-700 rounded-full z-100 w-15`}
    ${({ color }) => color && `background-color: ${color}`};
    ${({ view }) =>
      view
        ? `transform:translateX(-100%); left:100%`
        : `transform:translateX(0); left:0`};
  `,
};
export const Detail = {
  Container: styled.div<{ view: boolean }>`
    ${tw`absolute top-0 flex flex-col items-start justify-center w-full h-full duration-700 text-secondary-1 bg-primary`}
    ${({ view }) => (view ? tw`left-0 ` : tw`-left-full`)}
  `,
};

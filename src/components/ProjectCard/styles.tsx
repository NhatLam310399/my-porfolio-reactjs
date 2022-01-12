import styled from "styled-components";
import tw from "twin.macro";

export const ProjectCardContainer = styled.div<{ view: boolean }>`
  ${tw`relative z-30 flex items-center justify-center h-10 overflow-hidden border-4 border-solid border-secondary-1 phone:h-15`}// border: 4px solid #d7d7d7;
`;

export const Card = {
  Container: styled.div`
    ${tw`relative flex items-center justify-start w-full h-full gap-2 pl-0 border-none `}
  `,
  Name: styled.h3<{ view: boolean }>`
    ${tw`m-0 ml-16 font-bold text-secondary-1 text-xxl`}
  `,
  Logo: styled.img<{ view: boolean }>`
    ${tw`object-cover w-full phone:max-w-11 max-w-8`}
    ${({ view }) =>
      view
        ? "transform: rotate(360deg); transition:1s;"
        : `transform: rotate(0deg); transition:1s;`};
  `,
  LogoContainer: styled.div<{ color: string; view: boolean }>`
    ${tw`absolute top-0 z-50 flex items-center justify-center w-10 h-full overflow-hidden duration-700 rounded-full phone:w-15`}
    ${({ color }) => color && `background-color: ${color}`};
    ${({ view }) =>
      view
        ? `transform:translateX(-100%); left:100%`
        : `transform:translateX(0); left:0`};
  `,
  Divider: styled.div<{ show: boolean }>`
    ${tw`absolute block text-lg z-100 top-1/2 left-10 phone:hidden text-secondary-1`}
    ${({ show }) =>
      show ? tw`invisible opacity-0` : tw`visible duration-[2.5s] opacity-100 `}
    animation: scrollToRight 1.2s infinite linear;
    transform: translateY(-50%);
    @keyframes scrollToRight {
      0% {
        ${tw`left-10 `}
        opacity: 1;
      }

      50% {
        ${tw`left-11 `}
        opacity: 0.5;
      }

      100% {
        ${tw`left-12 `}
        opacity: 0;
      }
    }
  `,
};
export const Detail = {
  Container: styled.div<{ view: boolean }>`
    ${tw`absolute top-0 flex flex-col items-start justify-center w-full h-full duration-700 text-secondary-1 bg-primary`}
    ${({ view }) => (view ? tw`left-0 ` : tw`-left-full`)}
  `,
};

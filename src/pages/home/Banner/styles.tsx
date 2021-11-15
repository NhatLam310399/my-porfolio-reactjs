import styled from "styled-components";
import tw from "twin.macro";

export const BannerContainer = styled.div`
  ${tw`relative flex w-screen h-screen overflow-hidden bg-secondary-1 `}
  &:before {
    content: "";
    ${tw`absolute top-0 bottom-0 left-0 right-0 bg-primary`}
    transform:rotate(9.67deg) scale(1.5) translateX(50%);
  }
`;
export const Avatar = {
  Container: styled.div`
    ${tw`z-50 flex items-center justify-start w-1/2 pl-4`}
  `,
  Image: styled.img`
    ${tw`object-cover h-full`}
  `,
};
export const Information = {
  Container: styled.div`
    ${tw`relative flex flex-col items-start justify-center w-1/2 overflow-hidden phone:pl-6`}
  `,
  Greeting: styled.h3`
    ${tw`text-6xl font-bold text-primary`}
  `,
  Name: styled.h1`
    ${tw`mt-3 mb-0 font-bold text-7xl text-primary`}
  `,
  Career: styled.h4`
    ${tw`text-3xl mt-0.5 text-secondary-2 font-extrabold`}
  `,
  Contact: styled.div`
    ${tw`flex items-center mt-10 gap-x-3`}
  `,
  Item: styled.a`
    ${tw`w-6.5 overflow-hidden duration-500  cursor-pointer rounded-lg h-6.5 flex items-center justify-center bg-secondary-3`}
    &:hover {
      svg {
        transform: scale(1.3);
        ${tw`duration-500`}
      }
    }
  `,

  ItemToolTip: styled.p`
    ${tw`text-secondary-1`}
  `,
};

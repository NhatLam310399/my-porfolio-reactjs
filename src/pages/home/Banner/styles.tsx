import styled from "styled-components";
import tw from "twin.macro";

export const BannerContainer = styled.div`
  ${tw`overflow-hidden relative bg-secondary-1 w-screen h-screen flex  `}
  &:before {
    content: "";
    ${tw`absolute left-0 top-0 bottom-0 right-0 bg-primary`}
    transform:rotate(9.67deg) scale(1.5) translateX(50%);
  }
`;
export const Avatar = {
  Container: styled.div`
    ${tw`w-1/2 z-50 flex items-center justify-start pl-4`}
  `,
  Image: styled.img`
    ${tw`h-full object-cover`}
  `,
};
export const Information = {
  Container: styled.div`
    ${tw`w-1/2 relative overflow-hidden flex flex-col justify-center items-start phone:pl-6`}
  `,
  Greeting: styled.h3`
    ${tw`text-6xl text-primary font-bold`}
  `,
  Name: styled.h1`
    ${tw`text-7xl mb-0 mt-3 text-primary font-bold`}
  `,
  Career: styled.h4`
    ${tw`text-3xl mt-0.5 text-secondary-2 font-extrabold`}
  `,
  Contact: styled.div`
    ${tw`flex mt-10 items-center gap-x-3`}
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

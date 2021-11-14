import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`absolute top-5 z-30 right-6  gap-x-2 py-1 flex justify-end `}
`;
export const MenuItem = styled.div`
  ${tw`py-0.5 overflow-hidden duration-300 cursor-pointer relative  px-1.5 text-lg  text-secondary-1 font-bold`}
  &:before {
    content: "";
    ${tw`absolute bottom-0 left-0 w-full h-[2px] bg-secondary-1`};
    transform: scale(0);
    transition: 0.5s;
    transform-origin: center center;
  }
  &:hover {
    &:before {
      transition: 0.5s;
      transform: scale(1);
      transform-origin: center center;
    }
  }
`;
export const Item = styled.p`
  ${tw`z-30`}
`;

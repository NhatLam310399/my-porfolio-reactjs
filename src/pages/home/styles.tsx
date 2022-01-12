import styled from "styled-components";
import tw from "twin.macro";
import { NavMobile, MenuItem, Item as _Item } from "pages/home/Header/styles";
export const HomeContainer = styled.div<{ open: boolean }>`
  ${tw`top-0 bottom-0 left-0 right-0 w-full duration-300 transform max-w-phone phone:max-w-laptop laptop:max-w-full `}
  ${({ open }) =>
    !open
      ? "transform: translateY(0); position:relative;"
      : "transform: translateY(100%);position:fixed;"}
`;

export const Typing = {
  Container: styled.div`
    ${tw`w-full h-full mx-auto px-2 phone:px-0 phone:max-w-phone laptop:max-w-[1110px]`}
  `,
  Name: styled.h1`
    ${tw`text-secondary-1 text-5xl phone:text-[80px]`}
  `,
  Text: styled.h2`
    ${tw`text-3xl phone:text-[60px] text-secondary-1`}
  `,
};
export const CursorCustom = styled.div``;
export const Line = styled.div`
  ${tw`flex justify-center w-full my-12`}
`;
export const NavSideBar = styled.div`
  ${tw`fixed top-0 right-0 z-50 hidden w-screen h-screen pt-6 pr-6 bg-opacity-20 laptop:hidden max-w-phone bg-primary`}
`;
export const Head = styled.div`
  ${tw`flex justify-end `}
`;
export const Content = styled.div`
  ${tw`flex flex-col items-end w-full h-full gap-3 mt-6`}
`;
export const NavItem = styled(MenuItem)`
  ${tw`block text-secondary-1 text-xxl`}
`;
export const NavMobileHome = styled(NavMobile)``;
export const Item = styled(_Item)``;
export const OverlayModal = styled.div`
  ${tw`fixed top-0 bottom-0 left-0 right-0 z-40 hidden bg-primary bg-opacity-20`}
`;

import styled from "styled-components";
import tw from "twin.macro";

export const LeftSide = styled.div`
  ${tw`flex flex-col`}
`;
export const RightSide = styled.div`
  ${tw`items-center hidden phone:flex `}
`;
export const Company = styled.h3`
  ${tw`m-0 text-4xl font-bold uppercase text-primary `}
`;
export const Time = styled.p`
  ${tw`hidden m-0 text-3xl font-bold phone:block text-primary `}
`;
export const MobileTime = styled.p`
  ${tw`block m-0 text-3xl font-bold phone:hidden text-primary `}
`;
export const Position = styled.p`
  ${tw`m-0 phone:mt-3 mt-0.5  text-3xl font-medium text-primary `}
`;
export const Desc = styled.p`
  ${tw`m-0 mt-0.5 text-lg font-normal text-primary `}
`;
export const ExperienceContainer = styled.div`
  ${tw`flex items-center justify-between w-full py-1`}
`;

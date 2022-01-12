import styled from "styled-components";
import tw from "twin.macro";

export const SkillTemplateContainer = styled.div`
  ${tw`flex flex-col w-full mt-5 gap-y-2 phone:mt-10 phone:gap-y-7 phone:px-0`}
`;

export const Title = styled.h3`
  ${tw`text-4xl phone:pl-5.5 phone:text-left text-center uppercase text-primary font-bold tracking-[10px]`}
`;
export const List = styled.div`
  ${tw`grid grid-cols-2 px-3 phone:px-0 phone:gap-x-10 gap-x-2 gap-y-5 phone:grid-cols-4`}
`;
export const Item = styled.div`
  ${tw`flex flex-col items-center justify-center col-span-1 gap-1`}
`;
export const ItemIcon = styled.div`
  ${tw`flex items-center justify-center h-6 phone:h-10`}
  svg {
    ${tw`object-cover h-6 phone:h-10`}
  }
`;
export const ItemName = styled.p`
  ${tw`my-0 text-xl font-normal text-center uppercase phone:text-3xl `}
`;

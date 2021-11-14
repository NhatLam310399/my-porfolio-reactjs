import styled from "styled-components";
import tw from "twin.macro";

export const SkillTemplateContainer = styled.div`
  ${tw`w-full mt-10 flex flex-col gap-y-7`}
`;

export const Title = styled.h3`
  ${tw`text-4xl pl-5.5 uppercase text-primary font-bold tracking-[10px]`}
`;
export const List = styled.div`
  ${tw`grid grid-cols-2 gap-x-10 gap-y-5 phone:grid-cols-4`}
`;
export const Item = styled.div`
  ${tw`col-span-1 flex flex-col gap-1 justify-center items-center`}
`;
export const ItemIcon = styled.div`
  ${tw`flex items-center justify-center h-10`}
  svg {
    ${tw`h-10 object-cover`}
  }
`;
export const ItemName = styled.p`
  ${tw`text-center uppercase text-3xl my-0 font-normal `}
`;

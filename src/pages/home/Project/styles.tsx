import styled from "styled-components";
import tw from "twin.macro";

export const ProjectContainer = styled.div`
  ${tw`px-2 mx-auto phone:px-1 py-7 bg-primary`}
`;
export const BoxProject = styled.div`
  ${tw`hidden phone:block`}
  .styles-module_carousel-arrow__26sRw {
    ${tw`hidden`}
  }
  .styles-module_item-tracker__3bypy {
    ${tw`gap-3`}
  }
`;
export const BoxProjectMobile = styled.div`
  ${tw`flex flex-col gap-2 phone:hidden`}
`;
export const DetailContainer = styled.div`
  ${tw`w-full pl-1 flex-col text-secondary-1 font-normal flex items-start justify-center gap-0.5`}
`;
export const Detail = styled.p`
  ${tw`pr-16 m-0`}
`;
export const Highlight = styled.span`
  ${tw`font-bold`}
`;

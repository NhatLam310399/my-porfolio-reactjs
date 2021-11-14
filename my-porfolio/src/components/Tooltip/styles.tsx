import styled from "styled-components";
import tw from "twin.macro";

export const Content = styled.div`
  ${tw`absolute opacity-0 duration-500 min-w-[150px] min-h-[40px] rounded-lg -top-3/4 left-1/2 text-secondary-1 bg-primary flex items-center justify-center`}
  &:before {
    content: "";
    ${tw`absolute left-0.5 -bottom-2.5`}
    border-top: 15px solid black;
    border-bottom: 15px solid transparent;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
  }
`;

export const ToolTipContainer = styled.div`
  ${tw`relative`}
  &:hover {
    ${Content} {
      ${tw`opacity-100 duration-500`}
    }
  }
`;
export const Item = styled.div`
  ${tw` `}
`;

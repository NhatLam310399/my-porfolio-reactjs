import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.div`
  ${tw`flex flex-col items-center w-full py-1 mt-12 bg-primary`}
`;
export const BackToTop = styled.div`
  ${tw`flex items-center flex-col justify-center gap-0.5`}
`;

export const Text = styled.p`
  ${tw`m-0 text-xl font-bold uppercase text-secondary-1`}
`;

export const CopyRight = styled.p`
  ${tw`w-full m-0 mt-2 text-xl font-normal text-center text-secondary-1`}
`;
export const Framework = styled.p`
  ${tw`w-full m-0 text-lg font-normal text-center text-secondary-1`}
`;

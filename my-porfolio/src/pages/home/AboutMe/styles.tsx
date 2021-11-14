import styled from "styled-components";
import tw from "twin.macro";

export const AboutMeContainer = styled.div`
  ${tw`mt-14 w-full max-w-[1110px] mx-auto`}
`;
export const Description = styled.div`
  ${tw`mt-7 font-normal text-lg text-center text-primary-2`}
`;
export const Line = styled.div`
  ${tw`mt-5 flex justify-center items-center w-full`}
`;
export const Other = {
  Container: styled.div`
    ${tw`flex mt-6 max-w-60 relative flex-col justify-center items-center w-full`}
  `,
  Title: styled.h3`
    ${tw`text-xxl font-bold  text-primary `}
  `,
  Desc: styled.p`
    ${tw`mt-1 text-center leading-5 text-md font-normal  text-primary `}
  `,
  Icon: styled.div`
    ${tw`absolute left-0 top-0 `}
  `,
};

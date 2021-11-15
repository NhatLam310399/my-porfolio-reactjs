import {
  FooterContainer,
  BackToTop,
  Text,
  CopyRight,
  Framework,
} from "./styles";
import { Icons } from "asset/svg";
interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <FooterContainer>
      <BackToTop onClick={handleScroll}>
        <Icons.BackToTopIcon />
        <Text>back to top</Text>
      </BackToTop>
      <CopyRight>@2021 by LAM - Front end Web developer</CopyRight>
      <Framework>Create by ReactJs framework</Framework>
    </FooterContainer>
  );
};

export default Footer;

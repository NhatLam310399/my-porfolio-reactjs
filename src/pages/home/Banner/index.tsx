import { BannerContainer, Avatar, Information } from "./styles";
import { Icons } from "asset/svg";
import ScrollDown from "components/Scroll";

import ToolTip from "components/Tooltip";
import User from "asset/images/avatar.png";
interface IBannerProps {}

const Banner: React.FC<IBannerProps> = (props) => {
  return (
    <BannerContainer>
      <Information.Container id="tsparticles">
        <Information.Greeting>Hi, I am</Information.Greeting>
        <Information.Name>Nguyen Nhat Lam</Information.Name>
        <Information.Career>Front-end Web Developer</Information.Career>
        <Information.Contact>
          <ToolTip
            item={
              <Information.Item>
                <Icons.EmailIcon />
              </Information.Item>
            }
            text="nhatlam310399@gmail.com"
          />

          <Information.Item
            href="https://www.facebook.com/nhatlam3103/"
            target="_blank"
          >
            <Icons.FacebookIcon />
          </Information.Item>

          <Information.Item
            href="https://github.com/NhatLam310399"
            target="_blank"
          >
            <Icons.GithubIcon />
          </Information.Item>

          <ToolTip
            item={
              <Information.Item>
                <Icons.PhoneIcon />
              </Information.Item>
            }
            text="070 3456 400"
          />
        </Information.Contact>
      </Information.Container>
      <Avatar.Container>
        <Avatar.Image src={User} />
      </Avatar.Container>
      <ScrollDown />
    </BannerContainer>
  );
};

export default Banner;

import { BannerContainer, Avatar, Information } from "./styles";
import { Icons } from "asset/svg";
import ToolTip from "components/Tooltip";
import User from "asset/images/avatar.png";
interface IBannerProps {}

const Banner: React.FC<IBannerProps> = props => {
  return (
    <BannerContainer>
      <Information.Container id="tsparticles">
        <Information.Greeting>Hi, I am</Information.Greeting>
        <Information.Name>Nguyen Nhat Lam</Information.Name>
        <Information.Career>Front-end Web Developer</Information.Career>
        <Information.Contact>
          <Information.Item>
            <Icons.EmailIcon />
          </Information.Item>

          <Information.Item>
            <Icons.FacebookIcon />
          </Information.Item>

          <Information.Item>
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
    </BannerContainer>
  );
};

export default Banner;

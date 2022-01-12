import { HeaderContainer, Item, MenuItem, NavMobile } from "./styles";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = props => {
  return (
    <>
      <HeaderContainer>
        <MenuItem>
          <Item href="#aboutMe">About me</Item>
        </MenuItem>
        <MenuItem>
          <Item href="#skills">Skills</Item>
        </MenuItem>
        <MenuItem>
          <Item href="#project">Project</Item>
        </MenuItem>
        <MenuItem>
          <Item href="#experience">Experience</Item>
        </MenuItem>
        <NavMobile>L</NavMobile>
      </HeaderContainer>
    </>
  );
};

export default Header;

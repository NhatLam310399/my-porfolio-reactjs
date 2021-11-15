import { HeaderContainer, Item, MenuItem } from "./styles";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
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
    </HeaderContainer>
  );
};

export default Header;

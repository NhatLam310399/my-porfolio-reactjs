import { HeaderContainer, Item, MenuItem } from "./styles";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = props => {
  return (
    <HeaderContainer>
      <MenuItem>
        <Item>About me</Item>
      </MenuItem>
      <MenuItem>
        <Item>Skills</Item>
      </MenuItem>
      <MenuItem>
        <Item>Project</Item>
      </MenuItem>
    </HeaderContainer>
  );
};

export default Header;

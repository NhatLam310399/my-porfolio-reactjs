import React, { useEffect, useState } from "react";
import Typing from "react-typing-animation";

import StartScreen from "components/StartScreen";
import CursorCustom from "components/CursorCustom";
import { Icons } from "asset/svg";

import Header from "./Header";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Project from "./Project";
import Experiences from "./Experiences";
import Footer from "./Footer";

import {
  HomeContainer,
  Typing as Type,
  Line,
  NavSideBar,
  OverlayModal,
  Head,
  NavMobileHome,
  Item,
  NavItem,
  Content,
} from "./styles";

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <HomeContainer open={openModal}>
        <Header />
        <Banner />
        <AboutMe />
        <Line>
          <Icons.SeparatorIcon />
        </Line>
        <Skills />
        <Line>
          <Icons.SeparatorIcon />
        </Line>
        <Project />
        <Line>
          <Icons.SeparatorIcon />
        </Line>
        <Experiences />
        <Footer />
      </HomeContainer>
      <CursorCustom />
      <StartScreen open={openModal}>
        <Typing
          onFinishedTyping={() => {
            setTimeout(() => {
              setOpenModal(false);
            }, 1000);
          }}
        >
          <Type.Container>
            <Type.Name>Hi guys,</Type.Name>
            <Typing.Delay ms={150} />
            <Type.Text>Welcome to my profile !</Type.Text>
          </Type.Container>
        </Typing>
      </StartScreen>
      <NavSideBar>
        <Head>
          <NavMobileHome>L</NavMobileHome>
        </Head>
        <Content>
          <NavItem>
            <Item href="#aboutMe">About me</Item>
          </NavItem>
          <NavItem>
            <Item href="#skills">Skills</Item>
          </NavItem>
          <NavItem>
            <Item href="#project">Project</Item>
          </NavItem>
          <NavItem>
            <Item href="#experience">Experience</Item>
          </NavItem>
        </Content>
      </NavSideBar>
      <OverlayModal />
    </>
  );
};
export default Home;

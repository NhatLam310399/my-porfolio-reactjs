import React, { useEffect, useState } from "react";
import Typing from "react-typing-animation";

import TypingText from "components/TypingText";
import StartScreen from "components/StartScreen";
import CursorCustom from "components/CursorCustom";

import Header from "./Header";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Project from "./Project";

import { HomeContainer, Typing as Type } from "./styles";

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <HomeContainer open={openModal}>
        <Header />
        <Banner />
        <AboutMe />
        <Skills />
        <Project />
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
            <Typing.Delay ms={300} />
            <Type.Text>Welcome you to my portfolio !</Type.Text>
          </Type.Container>
        </Typing>
      </StartScreen>
    </>
  );
};
export default Home;

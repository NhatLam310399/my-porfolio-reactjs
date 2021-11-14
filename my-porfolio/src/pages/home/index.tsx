import React, { useEffect, useState } from "react";
import Typing from "react-typing-animation";

import TypingText from "components/TypingText";
import StartScreen from "components/StartScreen";
import CursorCustom from "components/CursorCustom";

import Header from "./Header";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

import { HomeContainer, Typing as Type } from "./styles";

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(false);
    }, 4500);
  }, []);

  return (
    <>
      <HomeContainer open={openModal}>
        <Header />
        <Banner />
        <AboutMe />
        <Skills />
      </HomeContainer>
      <CursorCustom />
      <StartScreen open={openModal}>
        <Typing>
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

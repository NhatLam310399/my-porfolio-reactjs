import { ExperienceContainer, List, Line } from "./styles";
import HeaderSession from "components/HeaderSession";
import ExperienceTemplate, { IExperience } from "components/Experience";
import { Icons } from "asset/svg";

interface IExperiencesProps {}

const Experiences: React.FC<IExperiencesProps> = (props) => {
  return (
    <ExperienceContainer id="experience" className="container">
      <HeaderSession text="Experience" />
      <List>
        {exps.map((exp, index) => (
          <>
            <ExperienceTemplate exp={exp} />
            {index === exps.length - 1 ? null : <Line />}
          </>
        ))}
      </List>
    </ExperienceContainer>
  );
};

export default Experiences;
const exps: IExperience[] = [
  {
    company: "GSOT",
    time: "10/2020 - 12/2020 | 3 months",
    position: "Front-end Web developer (Intern)",
    description: [
      "- Convert design from sketch, demo website  to HTML, CSS, JS.",
      "- Use JS, Jquery create animation basic.",
    ],
  },
  {
    company: "USUM SOFTWARE",
    time: "3/2021 - Now | > 6 months",
    position: "Front-end Web developer (Intern & Official staff)",
    description: [
      "- Participate in project development.",
      "- Use Next JS library for user website.",
      "- Use ReactJs framework to handle the functions after converting the design from figma.",
      "- Use some other libraries in the UI design process such as MUI, Bootstrap, React-slick, Headless UI,...",
      "- Use form processing libraries like Formik, validate like Yup.",
      "- Use Redux-saga to call api from GraphQl.",
    ],
  },
];

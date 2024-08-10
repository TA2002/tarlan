import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc in Computer Science (Minor: Applied Mathematics)",
    desc: "New York University Abu Dhabi | 2021 ~ Present",
  },
  {
    title: "Software Engineering",
    desc: "42 Abu Dhabi | June 2021",
  },
  {
    title: "High School education with a focus on Mathematics and Physics",
    desc: "Nazarbayev Intellectual School of Physics and Mathematics in Astana | 2014 - 2020",
  },
];

export default Education;

import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Tarlan Askaruly</HighlightSpan>!
      </p>
      <p>
        I'm a rising senior at{" "}
        <HighlightAlt>New York University Abu Dhabi</HighlightAlt> studying
        Computer Science.
      </p>
      <p>
        I enjoy creating high-quality software products with a complex logic
        behind them.
        {/* I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges. */}
      </p>
    </AboutWrapper>
  );
};

export default About;

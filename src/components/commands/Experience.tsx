import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Experience: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "experience")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="experience" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="experience">
      <ProjectsIntro>
        “Every new experience brings its own maturity and a greater clarity of
        vision” <br />
        Here is my work experience
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="experience" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: (
      <p>
        AIREV Holding Limited (on-demand.io) <br />
        June 2024 - Present <br />
        ------------------------------ <br />
        {/* - OnDemand is a cutting-edge Platform as a Service (PaaS) powered by RAG
        AI technology. <br />  */}
        - <b>Tech Stack:</b> Go, MongoDB, Docker, Redis, Redis Streams, gRPC,
        Elasticsearch, Pinecone, Cloudinary, Newrelic
        <br />
      </p>
    ),
    url: "https://on-demand.io",
  },
  {
    id: 2,
    title: "Software Engineer and Machine Learning Intern",
    desc: (
      <p>
        Laboratory for Computer-Human Intelligence at NYUAD <br />
        Feb 2023 - August 2023 <br />
        ------------------------------ <br />
        {/* - OnDemand is a cutting-edge Platform as a Service (PaaS) powered by RAG
        AI technology. <br />  */}
        - <b>Tech Stack:</b> Python, Javascript ∗ Flask, React, MySQL, Redux,
        pytest, jest, TailwindCSS ∗ AWS Elastic Beanstalk
        <br />
      </p>
    ),
    url: "https://nyuad.nyu.edu/en/research/faculty-labs-and-projects/laboratory-for-computer-human-intelligence.html",
  },
  {
    id: 3,
    title: "Software Engineer, Mobile team",
    desc: (
      <p>
        eKnot <br />
        Jul 2022 - Dec 2022 <br />
        ------------------------------ <br />
        {/* - OnDemand is a cutting-edge Platform as a Service (PaaS) powered by RAG
        AI technology. <br />  */}
        - <b>Tech Stack:</b> Swift ∗ Firebase, Fastlane, UIKit, CleanSwift,
        AVKit ∗ CI/CD, CocoaPods, Git
        <br />
      </p>
    ),
    url: "https://eknot.me/",
  },
  //   {
  //     id: 2,
  //     title: "Haru Fashion",
  //     desc: "An ecommerce web application where users can browse various products and make purchases.",
  //     url: "https://haru-fashion.vercel.app/",
  //   },
  //   {
  //     id: 3,
  //     title: "Haru API",
  //     desc: "A RESTful API developed for the Haru fashion ecommerce project.",
  //     url: "https://satnaing.github.io/haru-api/",
  //   },
  //   {
  //     id: 4,
  //     title: "AstroPaper Blog Theme",
  //     desc: "A minimal, accessible and SEO-friendly Astro blog theme.",
  //     url: "https://astro-paper.pages.dev/",
  //   },
];

export default Experience;

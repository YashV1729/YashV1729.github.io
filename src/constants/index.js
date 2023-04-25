// This file exports Services, Technologies, Experiences, Testimonials and Projects

import {
    mobile,
    backend,
    creator,
    web,

    js,
    react,
    github,
    docker,
    aws,
    go,
    python,
    linux,
    bash,
    ansible,
    jenkins,
    prometheus,
    helm,
    argo,

    uleth,
    dineout,
    frontrow,
    dexterity,

    carrent,
    jobit,
    tripguide,
    kube,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Backend Development",
      icon: mobile,
    },
    {
      title: "DevOps",
      icon: creator,
    },
    {
      title: "Content Creation",
      icon: backend,
    },
  ];
  
  const technologies = [
    
    {
      name: "React",
      icon: react,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "python",
      icon: python,
    },
    // {
    //   name: "react",
    //   icon: react,
    // },
    {
      name: "go",
      icon: go,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "github",
      icon: github,
    },
    {
      name: "linux",
      icon: linux,
    },
    {
      name: "bash",
      icon: bash,
    },
    {
      name: "ansible",
      icon: ansible,
    },
    {
      name: "jenkins",
      icon: jenkins,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "kubernetes",
      icon: kube,
    },
    {
      name: "argo",
      icon: argo,
    },
    {
      name: "helm",
      icon: helm,
    },
    {
      name: "prometheus",
      icon: prometheus,
    },
    {
      name: "aws",
      icon: aws
    }
  ];
  
  const experiences = [
    {
      title: "Research Assistant",
      company_name: "University of Lethbridge",
      icon: uleth,
      iconBg: "#383E56",
      date: "July 2022 - Dec 2022",
      points: [
        "Performed research on Digital Humanities Data which aimed at developing new methodologies for the archiving and publication of texts and multimedia objects for  the Visionary Crosses Project, under the supervision of Prof. Daniel O'Donnell.",
        "Working on different beta release of the Visionary Cross Project website, which uses 3dHop for rendering the high-resolution three-dimensional image of the sample dataset for the different crosses.",
        "Used HTML, CSS, JavaScript, GitHub pages, and Zenedo in designing and developing the release. ",
        "Presented the project to the international team of researchers, including humanities specialists, new media and gaming design experts, and computer scientists.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "DineOut",
      icon: dineout,
      iconBg: "#E6DEDD",
      date: "Mar 2022 - May 2022",
      points: [
        "Developed Dineout user profile page with React and NPS system with Firebase to collect data from restaurant partners.",
        "Containerized the build using Docker and migrated it to AWS for functional beta test and release.",
        "Worked with Kubernetes clusters in implementing high availability and self-healing of the pods.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Product Management Intern",
      company_name: "FrontRow",
      icon: frontrow,
      iconBg: "#383E56",
      date: "Sept 2021 - Jan 2023",
      points: [
        "Participating in the development of the beta release of the gamified reward system with the engineering & design team to deploy the scalable application within budget. ",
        "Collaborating with cross-functional teams including designers, product managers, developers and other stakeholders to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Took end-to-end ownership of the complete software development lifecycle of the products.", 
        "Focused prioritizing new features and dealing with product backlogs with the team which led to a gain of 15%+ MAU with 25% retention.",
      ],
    },
    {
      title: "User Research Intern",
      company_name: "Dexterity Global",
      icon: dexterity,
      iconBg: "#E6DEDD",
      date: "Apr 2020 - July 2020",
      points: [
        "Developed a education model with the team that aimed at providing an efficient educational related guidance to the young minds across the country, through vocational training.",
        "Worked with a national organization that powering the next generation of leaders through educational opportunities and training",
        "Contributed in developing a financial aid model for underprivilaged students, which later in the same year helped 200+ of them in finding their best carrier growth.",
      ],
    },
  ];
  

  
  const projects = [
    {
      name: "Kubernetes project",
      description:
        "dfbjsafhdj sdfjhbdsjfh dsjfhdjfhd fdfbdasjfbdasjfbdalbfldasbfdafdbfdajdf dasfjbdsajfbdf dafjbhdsafjldbfjda dadbafjjb kbdfjkbda",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ross Geller backend",
      description:
        " hgdsf dsfdabfkjdaf dafdabfjdf dafjdafdafb adfhhadfnaf a fnafkanfkasdnfasd fakdsnflasdnfasdfkfkafasf",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Joey sandwiches",
      description:
        "How you doing ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };
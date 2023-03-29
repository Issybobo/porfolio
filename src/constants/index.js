import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sol,
  website,
  fullstack,
  graphics,
  nft,
  real,
  ecommerce,
  jobit,
  tripguide,
  threejs,
 // python,
  //solidity,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Forex Trader",
    icon: web,
  },
  {
    title: "Fullstack Web Developer",
    icon: mobile,
  },
  {
    title: "Web3 Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
]
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  /*{
    name: "python",
    icon: python,
  },*/
 
 /* {
    name: "solidity",
    icon: solidity,
  },*/

];

const experiences = [
  {
    title: "Graphics Designer",
    company_name: "Self Employed",
    icon: graphics,
    iconBg: "#886cc4",
    date: "Jan 2019 - December 2020",
    points: [
      "Conceptualizing visuals based on requirements and Testing graphics across various media",
      "Creating images and layouts by hand or using design software.",
      "Work with copywriters and creative director to produce final design",
      "Working as a freelancer by helping my clients to build flyer, logos,  animations etc.",
    ],
  },
  {
    title: "Website Designer",
    company_name: "Freelancing",
    icon: website,
    iconBg: "#886cc4",
    date: "Jan 2021 - December 2021",
    points: [
      "Developing and maintaining web applications  and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Web Developer",
    company_name: "Defix Tech",
    icon: fullstack,
    iconBg: "#886cc4",
    date: "Jan 2022 - May 2022",
    points: [
      "Developing skills and expertise in appropriate software/programming languages such as HTML and Javascript",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Creating products that are user-friendly, effective and designing and developing APIs.",
      "Keeping up to date with recent technological and software developments",
    ],
  },
  {
    title: "Solidity Developer Internship",
    company_name: "Grandida LLC",
    icon: sol,
    iconBg: "#886cc4",
    date: "Jan 2023 - Present",
    points: [
      "Conduct blockchain research, design, development, and testing on the Ethereum network",
      "Using Solidity, create proprietary blockchain technology (services, libraries, and algorithms).",
      "Creating novel, reusable, tested, and efficient code to develop and support blockchain systems.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've been trying to put together a professional website since 2017. I am happy to say i finally hired Israel who helped me build an amazing website!",
    name: "Mary Lee",
    designation: "PFO",
    company: "Def Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After Israel build our decentralized application, our company is able to generate more clients that are willing to trade with our tokens!",
    name: "Mark Wang",
    designation: "FYO",
    company: "896 Enterprises",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    testimonial:
      "I've never met a Fullstack Web3 developer who truly cares about their clients' success like Israel does, I highly recommed him  .",
    name: "Rose Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },

];



const projects = [
  {
    name: "Nft Marketplace",
    description:
      "An NFT marketplace is a blockchain-based online platform to sell and buy non-fungible tokens popurlarly known as (NFTs)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Website",
    description:
      " A website that allows people to buy and sell physical goods, services, and digital products over the internet",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Real Estate DApp",
    description:
      "A real estate application where users can buy, and sell digital asset and virtual assets on the blockchain network.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: real,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
import { RiComputerLine } from 'react-icons/ri'
import { FaCss3Alt, FaJsSquare, FaNodeJs, FaPhp, FaReact, FaServer, FaWordpress } from 'react-icons/fa'
import { IProject, IService, ISkill, IStage } from './type';
import { AiFillGithub, AiFillHtml5, AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill, BsFillBootstrapFill } from 'react-icons/bs';
import { FaSchool } from 'react-icons/fa'
import { SiRedux, SiVisualstudio, SiNextdotjs, SiMysql, SiMongodb } from 'react-icons/si'

export const services: IService[] = [
  {
    title: "Développeur web",
    school: "Institut Paul Hankar",
    ville: "Bruxelles",
    about: "Réaliser, concevoir et développer des applications et site web dynamiques",
    date: "janvier 2017 - juin 2020",
    img: "/images/paulhankar.jpg",
    Icon: FaSchool
  },
  {
    title: "Droit et criminologie",
    school: "ULB",
    ville: "Bruxelles",
    about: "",
    date: "2019 - 2020",
    img: "/images/ulb.png",
    Icon: FaSchool
  }
];

export const stages: IStage[] = [
  {
    title: "Développeur web front end",
    school: "Isabel-group",
    ville: "Bruxelles",
    about: "Développement de sites internet, développement coté front html ‐ css ‐ javascript et coté back php ‐ MySQL",
    date: "avril 2019 - juin 2019",
    img: "/images/isabelgroup.png",
    Icon: FaServer
  }
]

export const languages: ISkill[] = [
  {
    name: 'Html',
    level: '84%',
    Icon: AiFillHtml5
  },
  {
    name: 'CSS',
    level: '82%',
    Icon: FaCss3Alt
  },
  {
    name: 'Bootstrap',
    level: '85%',
    Icon: BsFillBootstrapFill
  },
  {
    name: 'Javascipt',
    level: '75%',
    Icon: FaJsSquare
  },
  {
    name: 'React js',
    level: '76%',
    Icon: FaReact
  },
  {
    name: 'Redux',
    level: '55%',
    Icon: SiRedux
  },
  {
    name: 'node js & express',
    level: '69%',
    Icon: FaNodeJs
  },
  {
    name: 'PHP',
    level: '70%',
    Icon: FaPhp
  }
]

export const tools: ISkill[] = [
  {
    Icon: SiVisualstudio,
    name: 'Visual Studio Code',
    level: '75%',
  },
  {
    Icon: AiFillGithub,
    name: 'Git',
    level: '61%',
  }
]

export const cms: ISkill[] = [
  {
    Icon: FaWordpress,
    name: 'Wordpress',
    level: '55%',
  }
]

export const database: ISkill[] = [
  {
    Icon: SiMysql,
    name: 'MySQL',
    level: '75%',
  },
  {
    Icon: SiMongodb,
    name: 'MongoDB',
    level: '67%',
  }
]

export const projects: IProject[] = [
  /*{
    id: 1,
    name: "BLOG",
    description: "publication d'articles",
    image_path: "/images/blog2.png",
    deployed_url: "",
    github_url: "https://github.com/SenaidMemeti",
    category: ['react', 'mongo'],
    key_techs: ['react', 'node', 'mongo', 'express']
  },
  {
    id: 2,
    name: "Site web ecommerce",
    description: "Achat de vétement en ligne",
    image_path: "/images/ecommerce.png",
    deployed_url: "",
    github_url: "https://github.com/SenaidMemeti",
    category: ['react', 'node', 'express', 'mongo'],
    key_techs: ['react', 'node', 'mongo', 'express']
  },
  {
    id: 3,
    name: "Blog",
    description: "publication périodique et régulière d'articles personnels",
    image_path: "/images/blog.png",
    deployed_url: "",
    github_url: "https://github.com/SenaidMemeti",
    category: ['node', 'react', 'mongo'],
    key_techs: ['react', 'node', 'mongo', 'express']
  },
  {
    id: 4,
    name: "Site ecommerce",
    description: "Achat de materiel informatique en ligne",
    image_path: "/images/econext.png",
    deployed_url: "",
    github_url: "https://github.com/SenaidMemeti",
    category: ['node', 'express', 'react'],
    key_techs: ['next', 'node', 'mongo', 'express']
  },
  {
    id: 5,
    name: "Site restaurant",
    description: "Application de commande de nourriture",
    image_path: "/images/restaurant.png",
    deployed_url: "",
    github_url: "https://github.com/SenaidMemeti",
    category: ['node', 'express', 'react', 'mongo'],
    key_techs: ['next', 'node', 'mongo', 'express']
  },*/
  {
    id: 1,
    name: "Site web e-commerce",
    description: "Achats et ventes des téléphones en ligne",
    image_path: "/images/phones.png",
    deployed_url: "http://lesphones.epizy.com/",
    github_url: "https://github.com/SenaidMemeti",
    category: ['php', 'mysql'],
    key_techs: ['php', 'mysql']
  },
  {
    id: 2,
    name: "Projet école, site web, blog",
    description: "Déscription d'un ville historique albanaise",
    image_path: "/images/berat.png",
    deployed_url: "http://beratalbanie.epizy.com/",
    github_url: "https://github.com/SenaidMemeti",
    category: ['php', 'mysql'],
    key_techs: ['php', 'mysql']
  },
  {
    id: 3,
    name: "Blog react, next js",
    description: "Blog ou on peux poster et commenter des articles",
    image_path: "/images/cms.png",
    deployed_url: "https://blog-theta-pearl-45.vercel.app/",
    github_url: "https://github.com/SenaidMemeti",
    category: ['react', 'next' ],
    key_techs: ['next', 'react']
  },
  {
    id: 4,
    name: "Trouves l'image et le nom de Dinosaur",
    description: "Site web, ou on peut treouver les images sur google search en utilisant l'api",
    image_path: "/images/dinosaur.png",
    deployed_url: "https://dinosaurs-phi.vercel.app/",
    github_url: "https://github.com/SenaidMemeti",
    category: ['node' ],
    key_techs: ['node' ]
  }
  
]

import javascriptIcon from "../assets/javascript.icon.svg";
import typescriptIcon from "../assets/typescript.icon.svg";
import nextIcon from "../assets/next.icon.svg";
import reactIcon from "../assets/react.icon.svg";
import nodeIcon from "../assets/node.icon.svg";

export const TECHNOLOGIES: { [key: string]: any } = {
  TYPESCRIPT: {
    image: typescriptIcon,
    alt: "TypeScript icon",
    name: "TypeScript",
  },
  NEXT: {
    image: nextIcon,
    alt: "Next.Js icon",
    name: "Next.Js",
  },
  REACT: {
    image: reactIcon,
    alt: "React icon",
    name: "React",
  },
  NODE: {
    image: nodeIcon,
    alt: "Node icon",
    name: "Node.Js",
  },
  JAVASCRIPT: {
    image: javascriptIcon,
    alt: "JavaScript icon",
    name: "Javascript",
  },
};

export enum TechnologiesEnum {
  TYPESCRIPT = "TYPESCRIPT",
  NEXT = "NEXT",
  REACT = "REACT",
  NODE = "NODE",
  JAVASCRIPT = "JAVASCRIPT",
}

import { Languages } from "@/types";
import {
  Astro,
  Bun,
  CPlusPlus,
  Flutter,
  Next,
  Nodejs,
  React,
  CSharp,
  Photoshop,
  Figma,
  AdobeXD,
  StarUML,
  Kafka,
  Typescript,
} from "@components/ui/Icons";

const skills: Languages[] = [
  { text: "Node js", icon: Nodejs() },
  { text: "Bun js", icon: Bun() },
  { text: "Next Js", icon: Next() },
  { text: "React", icon: React() },
  { text: "Astro Js", icon: Astro() },
  { text: "Flutter", icon: Flutter() },
  { text: "C++", icon: CPlusPlus() },
  { text: "C#", icon: CSharp() },
  { text: "Photoshop", icon: Photoshop() },
  { text: "Figma", icon: Figma() },
  { text: "Adobe XD", icon: AdobeXD() },
  { text: "Star UML", icon: StarUML() },
  { text: "kafka", icon: Kafka() },
  { text: "Typescript", icon: Typescript() },
];

export default skills;

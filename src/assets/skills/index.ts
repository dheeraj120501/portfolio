import type { ComponentType, SvelteComponentTyped } from "svelte";

import HtmlLogo from "./html5-logo.svg.svelte";
import CssLogo from "./css3-logo.svg.svelte";
import JsLogo from "./js-logo.svg.svelte";
import TsLogo from "./ts-logo.svg.svelte";
import ReactLogo from "./react-logo.svg.svelte";
import SvelteLogo from "./svelte-logo.svg.svelte";
import TailwindLogo from "./tailwind-logo.svg.svelte";
import NodeLogo from "./node-logo.svg.svelte";
import MongoLogo from "./mongo-logo.svg.svelte";
import PostgresLogo from "./postgres-logo.svg.svelte";
import FlutterLogo from "./flutter-logo.svg.svelte";
import DartLogo from "./dart-logo.svg.svelte";
import GoLogo from "./go-logo.svg.svelte";
import PythonLogo from "./python-logo.svg.svelte";
import CppLogo from "./cpp-logo.svg.svelte";
import KotlinLogo from "./kotlin-logo.svg.svelte";
import DockerLogo from "./docker-logo.svg.svelte";
import GitLogo from "./git-logo.svg.svelte";
import NvimLogo from "./neovim-logo.svg.svelte";

interface SkillInterface {
  Logo: ComponentType<SvelteComponentTyped>;
  isWall: boolean;
  wallColor: string;
  name: string;
}

const Html: SkillInterface = {
  Logo: HtmlLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Html logo",
};

const Css: SkillInterface = {
  Logo: CssLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Css logo",
};

const Js: SkillInterface = {
  Logo: JsLogo,
  isWall: false,
  wallColor: "",
  name: "Javascript logo",
};

const Ts: SkillInterface = {
  Logo: TsLogo,
  isWall: false,
  wallColor: "",
  name: "Typescript logo",
};
const React: SkillInterface = {
  Logo: ReactLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "React logo",
};
const Svelte: SkillInterface = {
  Logo: SvelteLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Svelte logo",
};
const Tailwind: SkillInterface = {
  Logo: TailwindLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Tailwind logo",
};
const Node: SkillInterface = {
  Logo: NodeLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Node logo",
};
const Mongo: SkillInterface = {
  Logo: MongoLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Mongo logo",
};
const Postgres: SkillInterface = {
  Logo: PostgresLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Postgres logo",
};

const Flutter: SkillInterface = {
  Logo: FlutterLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Flutter logo",
};

const Dart: SkillInterface = {
  Logo: DartLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Dart logo",
};

const Go: SkillInterface = {
  Logo: GoLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Golang logo",
};

const Python: SkillInterface = {
  Logo: PythonLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Python logo",
};

const Cpp: SkillInterface = {
  Logo: CppLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "CPP logo",
};

const Kotlin: SkillInterface = {
  Logo: KotlinLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Kotlin logo",
};

const Docker: SkillInterface = {
  Logo: DockerLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Docker logo",
};

const Git: SkillInterface = {
  Logo: GitLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Git logo",
};

const Nvim: SkillInterface = {
  Logo: NvimLogo,
  isWall: true,
  wallColor: "bg-slate-100",
  name: "Neo Vim logo",
};

export default [
  Html,
  Css,
  Js,
  Ts,
  React,
  Svelte,
  Tailwind,
  Node,
  Mongo,
  Postgres,
  Flutter,
  Dart,
  Go,
  Python,
  Cpp,
  Kotlin,
  Docker,
  Git,
  Nvim,
];

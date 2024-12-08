import React, { JSX } from "react";
import { PageItem } from "@/types/PageSectionTypes";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export const PageSections: PageSectionTypes = [
  {
    id: 1,
    dataId: "home",
    node: <Hero />,
  },
  {
    id: 2,
    dataId: "about",
    node: <About />,
  },
  {
    id: 3,
    dataId: "resume",
    node: <Resume />,
  },
  {
    id: 4,
    dataId: "portfolio",
    node: <Portfolio />,
  },
  {
    id: 5,
    dataId: "contact",
    node: <Contact />,
  },
];

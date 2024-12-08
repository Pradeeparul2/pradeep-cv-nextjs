"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "./Header";
import MobileNav from "./MobileNav";
import NavArrow from "./NavArrow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

import { MainMenu } from "@/constants/Menu";
import { animationAllClasses } from "@/constants/AminationClasses";
import { MenuItem } from "@/types/MainManuTypes";
import { PageSectionTypes } from "@/types/PageSectionTypes";

const PageContent = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(MainMenu[0].href);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClasses, setAnimationClasses] = useState({
    inClass: "animated-section-moveFromRight",
    outClass: "animated-section-moveToLeft",
  });

  // const animEndEventNames: any = {
  //   WebkitAnimation: "webkitAnimationEnd",
  //   OAnimation: "oAnimationEnd",
  //   msAnimation: "MSAnimationEnd",
  //   animation: "animationend",
  // };

  const animEndEventName = "animationend";

  const handleMenuClick: (e: React.MouseEvent, menu: MenuItem) => void = (
    e: React.MouseEvent,
    menu: MenuItem
  ) => {
    e.preventDefault();
    if (isAnimating || menu.href === currentPage.split("#")[1]) return;
    setIsAnimating(true);
    // 67 - Total amimations
    const randomAnimation = Math.floor(Math.random() * 67) + 1;
    const { inClass, outClass } = animationAllClasses[randomAnimation];
    setAnimationClasses({ inClass, outClass });
    setCurrentPage(menu.href);
    router.push(`/${menu.href}`);
  };

  const PageSections: PageSectionTypes = [
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

  useEffect(() => {
    const currentSection = document.querySelector(
      `section[data-id="${currentPage.split("#")[1]}"]`
    );
    const prevSection = document.querySelector(
      `section:not([data-id="${currentPage.split("#")[1]}"]).section-active`
    );

    // let inAmination: any = "";
    // if (animationClasses?.inClass.split(" ").length > 1) {
    //   inAmination = [...animationClasses?.inClass.split(" ")];
    // } else {
    //   inAmination = animationClasses?.inClass;
    // }

    // let outAmination: any = "";
    // if (animationClasses?.outClass.split(" ").length > 1) {
    //   outAmination = [...animationClasses?.outClass.split(" ")];
    // } else {
    //   outAmination = animationClasses?.outClass;
    // }

    const onAnimationEnd = () => {
      setIsAnimating(false);
      // Remove the animation class after the animation ends
      if (currentSection) {
        currentSection.classList.forEach((className) => {
          if (className.startsWith("animated-section-")) {
            currentSection?.classList.remove(className);
          }
        });
      }
    };

    if (currentSection && animationClasses?.inClass) {
      currentSection.classList.add(...animationClasses?.inClass.split(" "));
      currentSection.addEventListener(animEndEventName, onAnimationEnd, {
        once: true,
      });
      currentSection.classList.add("section-active");
    }

    if (prevSection && animationClasses?.outClass) {
      prevSection.classList.add(...animationClasses?.outClass.split(" "));
      prevSection.classList.remove("section-active");
      prevSection.addEventListener(
        animEndEventName,
        () => {
          // Remove the animation class after the animation ends
          if (prevSection) {
            prevSection.classList.forEach((className) => {
              if (className.startsWith("animated-section-")) {
                prevSection?.classList.remove(className);
              }
            });
          }
        },
        { once: true }
      );
    }

    return () => {
      if (currentSection) {
        currentSection.removeEventListener(animEndEventName, onAnimationEnd);
      }
      if (prevSection) {
        prevSection.removeEventListener(animEndEventName, onAnimationEnd);
      }
    };
  }, [currentPage, animationClasses, animEndEventName]);

  return (
    <div className="page">
      <div className="page-content">
        <Header
          MainMenu={MainMenu}
          currentPage={currentPage}
          handleMenuClick={handleMenuClick}
        />
        <MobileNav />
        <NavArrow />
        <div className="content-area">
          <div className="animated-sections">
            {PageSections.map((page) => (
              <section
                key={page.id.toString()}
                data-id={page.dataId}
                className={`animated-section  start-page ${
                  currentPage == page.dataId ? "section-active" : ""
                }`}
              >
                {page.node}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageContent;

import React from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem] md:ml-10">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>

                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button className="mb-10">Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem]">
          <p className="body-2 text-n-4 mb-10 md:mb-16 lg:mb-32 lg:mx-auto lg:w-[22rem] ml-0 md:ml-8">
            {collabText}
          </p>

          <div className="border border-n-5 flex w-[22rem] aspect-square rounded-full relative left-1/2 -translate-x-1/2">
            <div className="w-60 border border-n-5 aspect-square rounded-full m-auto flex">
              <div className="w-[6rem] bg-conic-gradient aspect-square rounded-full m-auto p-[0.2rem]">
                <div className="bg-n-8 rounded-full w-full h-full flex items-center justify-center">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((item, index) => (
                <li
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`border border-n-1/15 bg-n-7 relative -top-[1.6rem] w-[3.2rem] h-[3.2rem] flex rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      src={item.icon}
                      width={item.width}
                      height={item.height}
                      className="m-auto"
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;

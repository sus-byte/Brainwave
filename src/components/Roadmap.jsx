import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";
import Button from "./Button";

const Roadmap = () => {
  return (
    <Section id="roadmap">
      <div className="container">
        <Heading tag="Ready to get started" title="What we're working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => (
            <div
              key={item.id}
              className={`md:flex p-0.25 rounded-[2.5rem] even:md:translate-y-[7rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
            >
              <div className="relative bg-n-8 p-8 xl:p-15 rounded-[2.4375rem] overflow-hidden">
                <div className="absolute left-0 top-0">
                  <img
                    src={grid}
                    width={550}
                    height={550}
                    className="w-full"
                    alt="grid"
                  />
                </div>

                <div className="relative z-1">
                  <div className="flex items-center justify-between mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="bg-n-1 text-n-8 flex items-center px-4 py-1 rounded">
                      <img
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        className="mr-2.5"
                        alt={item.status}
                      />
                      <div className="tagline">{item.status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      src={item.imageUrl}
                      className="w-full"
                      width={630}
                      height={420}
                      alt={item.title}
                    />
                  </div>

                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          ))}

          <Gradient />
        </div>

        <div className="mt-12 md:mt-15 xl:mt-20 flex justify-center">
          <Button>Our Roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;

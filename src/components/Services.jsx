import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 border border-n-1/10 h-[38rem] rounded-3xl flex items-center mb-5 p-8 overflow-hidden lg:p-20">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="Smartest AI"
                width={800}
                height={730}
                className="w-full h-full object-cover md:object-right"
              />
            </div>

            <div className="z-1 relative max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 text-n-3 mb-[3rem]">
                Brainwave unlocks the potential of AI-powered applications
              </p>

              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:-translate-x-1/2 lg:bottom-8" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[38rem] border border-n-1/10 rounded-3xl overflow-hidden ">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  width={630}
                  height={750}
                  alt="robot"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 text-n-3 mb-[3rem]">
                  Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!{" "}
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="bg-n-7 p-4 rounded-3xl lg:min-h-[38rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 text-n-3 mb-[2rem]">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex justify-between items-center">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex justify-center items-center rounded-2xl ${
                        index === 2
                          ? "bg-conic-gradient p-0.25 w-[3rem] h-[3rem] md:w-[4.5rem] md:h-[4.5rem]"
                          : "bg-n-6 w-10 h-10 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={`${
                          index === 2
                            ? "bg-n-7 w-full h-full rounded-[1rem] flex items-center justify-center"
                            : ""
                        }`}
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative bg-n-8 h-[20rem] rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  alt="robot"
                  width={520}
                  height={400}
                  className="w-full h-full object-cover"
                />

                <VideoBar />
                <VideoChatMessage />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;

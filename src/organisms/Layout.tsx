"use client";
import React, { FC, useState } from "react";
import Header from "./Header";
import DialingSection from "./DialingSection";
import { useAppSelector } from "../libstore/hooks";
import ContactDetail from "./ContactDetail";
import ContactAddSection from "./ContactAddSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import InfoSection from "./InfoSection";
import Label from "@/app-components/Label";
import { Card, CardContent } from "@/components/ui/card";

interface ILayout {
  children: React.ReactNode;
}

const MainLayout: FC<ILayout> = ({ children }) => {
  const [showAddSection, setShowAddSection] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const dialing = useAppSelector((state) => state.dialing);

  const handleTrigerEdit = () => {
    setShowAddSection(true);
    setIsEdit(true);
  };
  return (
    <main>
      <div className="container bg-transparent px-5 py-5 lg:px-[200px] lg:py-10">
        <Header />
        <div className="flex mt-5">
          <div className="w-full lg:w-3/5 bg-white rounded-3xl me-0 lg:me-5 lg:h-[800px] py-10 overflow-hidden">
            {children}
          </div>
          <div className="w-2/5 hidden lg:block">
            <ContactDetail triggerEdit={handleTrigerEdit} onDailing={false} />
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setShowAddSection(true);
        }}
        className="w-[100px] h-[100px] cursor-pointer text-primary hover:bg-primary hover:text-white shadow-lg rounded-full z-40 fixed text-center justify-center content-center item-center bottom-[20px] right-[40px] md:bottom-[50px] md:right-[70px] bg-white"
      >
        <FontAwesomeIcon icon={faPlus} className="text-5xl font-bold" />
      </div>
      {showAddSection && (
        <ContactAddSection
          isEdit={isEdit}
          setShowAddSection={setShowAddSection}
        />
      )}
      {dialing.status && <DialingSection />}

      {showInfo && (
        <InfoSection
          onContinue={() => {
            setShowInfo(false);
          }}
        >
          <div className="w-full h-[600px] overflow-auto">
            <div className="w-full">
              <span className="text-3xl">App Specification Info</span>
            </div>
            <div className="w-full md:flex mt-5">
              <div className="w-full md:w-1/2">
                <div className="w-full">
                  <Label text="Technologies Info" />
                </div>
                <div className="w-full ps-5">
                  <ul className="list-disc">
                    <li>Next JS 14</li>
                    <li>Redux Tool Kit</li>
                    <li>React Tanstack Query</li>
                    <li>React Hook Form</li>
                    <li>Tailwind CSS</li>
                    <li>ShadCN UI</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full">
                  <Label text="Component Pattern" />
                </div>
                <div className="w-full ps-5">
                  <ul className="list-disc">
                    <li>Atomic Design Pattern</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:flex mt-5">
              <div className="w-full md:w-1/2">
                <div className="w-full">
                  <Label text="Deploy Tech Info" />
                </div>
                <div className="w-full ps-5">
                  <ul className="list-disc">
                    <li>Ubuntu 20 Cloud VPS</li>
                    <li>Cloudflare SSL</li>
                    <li>Bundled in Docker Image</li>
                    <li>Node JS 18 above</li>
                    <li>NginX</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full">
                  <Label text="Component Pattern" />
                </div>
                <div className="w-full ps-5">
                  <ul className="list-disc">
                    <li>Atomic Design Pattern</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:flex mt-5">
              <div className="w-full md:w-1/2">
                <div className="w-full">
                  <Label text="How to run this project ?" />
                  <p>Running this project into your local computer easily.</p>
                </div>
                <div className="w-full ps-5">
                  <ul className="list-disc">
                    <li>
                      Download it from{" "}
                      <a
                        className="text-sky-500"
                        href="https://github.com/rrrgho/contact-web-app.git"
                      >
                        https://github.com/rrrgho/contact-web-app.git
                      </a>
                    </li>
                    <li>Make sure you have docker installed</li>
                    <li>
                      Run command{" "}
                      <span className="text-primary">
                        "docker build -t your-desired-image-name ."
                      </span>
                    </li>
                    <li>
                      Run command{" "}
                      <span className="text-primary">
                        "docker run -p 3000:3000 your-desired-image-name"
                      </span>
                    </li>
                    <li>
                      visit{" "}
                      <span className="text-primary">
                        http://localhost:3000
                      </span>{" "}
                      this will show you prod version of this app
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:flex mt-5">
              <Card>
                <CardContent className="p-5">
                  Notes:{" "}
                  <ul>
                    <li>
                      <span className="font-bold">
                        I have found problem about your API ( heroku ) in method
                        PUT and Delete, it returns 400 in anyway.
                      </span>{" "}
                      <br />
                      but I have made another way to make this CRUD runs
                      smoothly by adjust the Redux State, you will find this out
                      when you test to edit and delete the data.
                    </li>

                    <li>
                      <span className="font-bold">
                        The GET api also doesn't support pagination
                      </span>
                      , so it makes me cannot add lazyLoading on it, and the
                      loading time might slower in running time as the data is
                      increasing !
                    </li>

                    <li>
                      I provide upload image and preview when you add the data,
                      <span className="font-bold">
                        but the image will not be saved in anyway
                      </span>
                      . instead, I use random avatar api to generate avatar
                      image for each data.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </InfoSection>
      )}
    </main>
  );
};

export default MainLayout;

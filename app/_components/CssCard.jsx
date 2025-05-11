"use client";
import React, { useEffect, useState } from "react";
import {
  PokemonOshawott,
  PokemonSnivy,
  PokemonTepig,
  AngryBirds,
  AngryPigs,
  Fish,
} from "../_components/design";
import svg from "@/public/assets";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const components = {
  PokemonOshawott,
  PokemonSnivy,
  PokemonTepig,
  AngryBirds,
  AngryPigs,
  Fish,
};

const CssCard = ({ key, name, htmlPath, cssPath }) => {
  const [activeTab, setActiveTab] = useState("result");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    if (htmlPath) {
      fetch(htmlPath)
        .then((res) => res.text())
        .then((data) => setHtmlCode(data));
    }
    if (cssPath) {
      fetch(cssPath)
        .then((res) => res.text())
        .then((data) => setCssCode(data));
    }
  }, [cssPath]);
  const DrawingComponent = components[name];
  return (
    <div className="w-full bg-background-csscard-tab rounded-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex">
        {["result", "html", "css"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 text-sm font-nippo-regular cursor-pointer  ${
              activeTab === tab
                ? "text-foreground bg-background-csscard"
                : "text-text-1 hover:text-foreground hover:bg-background-csscard-tab-hover"
            }`}
          >
            {tab === "result" && (
              <div className="flex items-center gap-2">
                <img src={svg.result} alt="logo result" className="w-6 h-6" />
                <p>Result</p>
              </div>
            )}

            {tab === "html" && (
              <div className="flex items-center gap-2">
                <img src={svg.html} alt="logo html" className="w-6 h-6" />
                <p>HTML</p>
              </div>
            )}

            {tab === "css" && (
              <div className="flex items-center gap-2">
                <img src={svg.css} alt="logo css" className="w-6 h-6" />
                CSS
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-background-csscard rounded-b-lg h-[250px] overflow-hidden">
        {activeTab === "result" && (
          <div className="flex justify-center items-center h-full">
            {DrawingComponent ? (
              <DrawingComponent />
            ) : (
              <p className="text-white">Component not found</p>
            )}
          </div>
        )}

        {activeTab === "html" && (
          <div className="h-full overflow-y-auto custom-scroll">
            <div className="csscard-code-block">
              <SyntaxHighlighter language="html" style={dracula}>
                {htmlCode}
              </SyntaxHighlighter>
            </div>
          </div>
        )}

        {activeTab === "css" && (
          <div className="h-full overflow-y-auto custom-scroll">
            <div className="csscard-code-block">
              <SyntaxHighlighter language="css" style={dracula}>
                {cssCode.replace(/^\s+/gm, "")}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CssCard;

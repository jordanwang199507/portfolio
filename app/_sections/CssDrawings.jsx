import React from "react";
import { CssCard } from "../_components";
import { cssDrawings } from "../_constants";

const CssDrawings = () => {
  return (
    <section className="pt-36 relative pb-20 max-sm:pb-10 max-md:pt-24">
      <div className="csscards-container">
        {/* Header */}
        <div className="flex w-full items-center gap-4 max-sm:gap-2 max-w-4xl mx-auto">
          <h2 className="font-nippo-regular text-[32px] max-md:text-[28px] max-sm:text-2xl  text-foreground">
            04.
          </h2>
          <h2 className="font-red-hat font-bold text-[32px] max-md:text-[28px] max-sm:text-2xl  whitespace-nowrap">
            CSS Drawings
          </h2>
          <hr className="h-[1px] bg-font w-full ml-4 opacity-50" />
        </div>

        {/* Card */}
        <div className="mt-12 grid gap-8 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {cssDrawings.map((drawing) => (
            <CssCard
              key={drawing.id}
              name={drawing.name}
              htmlPath={drawing.htmlPath}
              cssPath={drawing.cssPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CssDrawings;

import React from "react";
import FeaturesSectionOne from "../FeaturesSectionOne";
import FeaturesSectionThree from "../FeaturesSectionThree";
import FeaturesSectionTwo from "../FeaturesSectionTwo";

// import components

const Features = () => {
  return (
    <section className="pt-12 lg:pt-24 bg-violet mt-24">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
        </div>
        <FeaturesSectionOne />
        <FeaturesSectionTwo />
        <FeaturesSectionThree />
      </div>
    </section>
  );
};

export default Features;

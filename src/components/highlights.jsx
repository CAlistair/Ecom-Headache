import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./highlight.jsx";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="blue">View</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
             icon={<FontAwesomeIcon icon="bolt" />}
             title="Easy and Quick"
             para="Get your monitor delivered in 2-3 working days"
             />
            <Highlight
             icon={<FontAwesomeIcon icon="desktop" />}
             title="Satisfaction"
             para="Return your monitor within 30 days if you are not satisfied"
             />
            <Highlight
             icon={<FontAwesomeIcon icon="tags" />}
             title="Affordable"
             para="Monitors with all sorts of price ranges"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights
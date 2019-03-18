import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <ImageThumbnail />
      <div>
        <p className="title">
          Lambda School
          <span className="title_date"> @LambdaSchool * 26 jan</span>
        </p>
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;

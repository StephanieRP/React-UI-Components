import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";
import moment from "moment";

let todaysDate = moment()
  .subtract(10, "days")
  .calendar();

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <ImageThumbnail />
      <div>
        <p className="title">
          Lambda School
          <span className="title_date">@LambdaSchool &#183; {todaysDate}</span>
        </p>
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;

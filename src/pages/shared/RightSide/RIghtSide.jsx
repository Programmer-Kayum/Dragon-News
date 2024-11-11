import React from "react";
import LoginByGoogle from "./LoginByGoogle";
import SocialMediaButtons from "./SocialMediaButtons";
import QZone from "./QZone";

const RIghtSide = () => {
  return (
    <div>
      <div>
        <LoginByGoogle></LoginByGoogle>
        <SocialMediaButtons></SocialMediaButtons>
        <QZone></QZone>
      </div>
    </div>
  );
};

export default RIghtSide;

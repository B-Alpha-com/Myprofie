import React from "react";
import "./WebPage.css";
import bg from "./Asset/bg.jpg";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyProfile from "./MyProfile";

const WebPage = ({ theme, onclick, condition }) => {
  return (
    <div className="container">
      <div className="li_Div">
        <ul className="Ul">
          <li className={condition === true ? "mo" : "mo2"}>MO</li>
          <li className={condition === true ? "welcome" : "welcome2"}>
            You are welcome
          </li>
          <li>
            <i>
              <FontAwesomeIcon
                className="icon"
                onClick={onclick}
                style={{ color: condition === true ? "white" : "white" }}
                icon={faLightbulb}
              />
            </i>
          </li>
        </ul>
      </div>
      <div className="div_2">
        <div className="name_Div">
          <p className={condition === true ? "name" : "name2"}>
            Mubarak Olasode:MO
          </p>
        </div>
        <div className="image_Div">
          <img className="image" src="" alt="isComing" />
        </div>
        <div class="href_Div">
          <div className="sub_href">
            <a
              className={condition === true ? "a" : "a1"}
              href="/Users/andela/Desktop/Project-Folder/myweb/src/Myprofile.html"
            >
              My Profile
            </a>
            <a
              className={condition === true ? "b" : "b1"}
              href="https://twitter.com/OlasodeM"
            >
              Twitter
            </a>
            <a
              className={condition === true ? "c" : "c1"}
              href="https://github.com/B-Alpha-com"
            >
              Github
            </a>
            <a
              className={condition === true ? "d" : "d1"}
              href="www.twitter.com"
            >
              BlogPost
            </a>
            <a
              className={condition === true ? "e" : "e1"}
              href="www.twitter.com"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPage;

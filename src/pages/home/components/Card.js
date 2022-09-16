import classNames from "classnames";
import { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar";
import "./Card.css";
import Button from "../../../components/Button";
import { AiFillFacebook } from "react-icons/ai";
import ContentCard from "./ContentCard";
import { useSelector } from "react-redux";

const Card = () => {
  const user = useSelector((state) => state.auth.user);

  const [wsize, setWsize] = useState(window.screen.width);
  const [wphone, setWphone] = useState(false);

  useEffect(() => {
    setWsize(window.screen.width);
    setWphone(wsize < 512);
  }, [window.screen.width]);

  return (
    <div
      className={classNames({
        "px-6 py-3": wphone,
        "mt-5": !wphone
      })}
    >
      <div
        className={classNames({
          "flex justify-between gap-x-6": true,
          "flex-col gap-y-6": wphone,
        })}
      >
        <div
          className={classNames({
            "rounded-lg bg-[#6bbd99] flex flex-col justify-center items-center gap-y-6": true,
            "h-56 w-full": wphone,
            "h-96 w-2/3": !wphone,
          })}
        >
          {/*window.screen.width*/}
          {/* {console.log(wphone)} */}
          {/* <div className="w-1/12 mt-5"><NavBar /></div> */}
          <h1 className={classNames({
            "font-bold text-white": true,
            "text-center text-3xl": wphone,
            "text-4xl": !wphone
          })}>Merhaba {user.fullName}</h1>
          <h3 className={classNames({
            "text-xs font-semibold text-white": true,
            "text-center": wphone
          })}>Henüz Yapım Aşamasındayız :) </h3>
          {/* <div className="w-full flex justify-center gap-x-6 px-6 mt-10">
            <ContentCard children={"Detoxlar..."} imgSrc={"https://images.pexels.com/photos/291531/pexels-photo-291531.jpeg?auto=compress&cs=tinysrgb&w=1600"} wphone={wphone} />
            <ContentCard children={"Sağlıklı yaşam..."} imgSrc={"https://images.pexels.com/photos/2568459/pexels-photo-2568459.jpeg?auto=compress&cs=tinysrgb&w=1600"} wphone={wphone} />
             
          </div> */}
        </div>
        <div
          className={classNames({
            "rounded-lg bg-[#fdd037]": true,
            "h-24 w-full": wphone,
            "w-1/3 h-96": !wphone,
          })}
        ></div>
      </div>

      <div className="mt-6 flex gap-x-6 inline">
        <div
          className={classNames({
            "w-2/3 h-96 flex gap-x-6": true,
            "flex-col gap-y-6": wphone,
          })}
        >
          <div
            className={classNames({
              "h-96 rounded-lg bg-[#aecfa4]": true,
              "w-full": wphone,
              "w-1/2": !wphone,
            })}
          ></div>
          <div
            className={classNames({
              "h-96 rounded-lg bg-[#46a094]": true,
              "w-full": wphone,
              "w-1/2": !wphone,
            })}
          ></div>
        </div>

        <div className="w-1/3 h-96">
          <div
            className={classNames({
              "w-full h-1/2 flex gap-x-6": true,
              "flex-col gap-y-6": wphone,
            })}
          >
            <div
              className={classNames({
                "h-44 bg-[#12adc1] rounded-lg": true,
                "w-full": wphone,
                "w-1/2": !wphone,
              })}
            ></div>
            <div
              className={classNames({
                "h-44 bg-[#e65c4f] rounded-lg": true,
                "w-full": wphone,
                "w-1/2": !wphone,
              })}
            ></div>
          </div>
          <div
            className={classNames({
              "w-full h-1/2 flex gap-x-6": true,
              "flex-col": wphone,
            })}
          >
            <div
              className={classNames({
                "bg-[#0295a9] rounded-lg": true,
                "h-44 w-full mt-6": wphone,
                "h-46 w-1/2 mt-2": !wphone,
              })}
            ></div>
            <div className=" invisible w-1/2 h-44 gradient-pink rounded-lg "></div>
          </div>
        </div>
      </div>
      </div>
  );
};
export default Card;

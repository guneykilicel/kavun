import classNames from "classnames";
import { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [wsize, setWsize] = useState(window.screen.width);
  const [wphone, setWphone] = useState(false);

  useEffect(() => {
    setWsize(window.screen.width);
    setWphone(wsize < 512);
  }, [window.screen.width]);

  return (
    <div
      className={classNames({
        "mt-5": !wphone,
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
            "w-1/2 rounded-lg bg-back-blur bg-cover": true,
            "h-56 w-full": wphone,
            "h-96": !wphone,
          })}
        >
          {/*window.screen.width*/}
        </div>
        <div className="w-1/2 flex items-center gap-x-6">
          <div
            className={classNames({
              "rounded-lg bg-[#46a094] bg-cover": true,
              "h-24 w-full": wphone,
              "w-1/2 h-96": !wphone,
            })}
          ></div>
          <div
            className={classNames({
              "rounded-lg bg-[#fdd037]": true,
              "h-24 w-full": wphone,
              "w-1/2 h-96": !wphone,
            })}
          ></div>
        </div>
      </div>

      <div
        className={classNames({
          "flex justify-between gap-x-6": true,
          "flex-col gap-y-6": wphone,
        })}
      >
        <div className="w-1/2 flex flex-col mt-6">
          <div className="bg-[#6bbd99] w-full h-48 rounded-lg"></div>
          <div className="flex mt-6 gap-x-6">
            <div className="bg-[#aecfa4] w-1/2 h-48 rounded-lg"></div>
            <div className="bg-[#c4e8c2] w-1/2 h-48 rounded-lg"></div>
          </div>
        </div>

        <div className="w-1/2 flex items-center gap-x-6 mt-6">
          <div className="w-1/2 flex flex-col">
            <div className="flex gap-x-6 mb-6">
              <div className="bg-[#0295a9] w-1/2 h-48 rounded-lg"></div>
              <div className="bg-[#12adc1] w-1/2 h-48 rounded-lg"></div>
            </div>
            <div className="bg-[#e65c4f] w-full h-48 rounded-lg mb-6"></div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex gap-x-6 mb-6">
              <div className="bg-[#41436a] w-1/2 h-48 rounded-lg"></div>
              <div className="bg-[#974063] w-1/2 h-48 rounded-lg"></div>
            </div>
            <div className="flex gap-x-6 mb-6">
              <div className="bg-[#f54768] w-1/2 h-48 rounded-lg"></div>
              <div className="bg-[#ff9677] w-1/2 h-48 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

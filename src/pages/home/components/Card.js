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
        "p-6": wphone,
        "mt-5": !wphone,
      })}
    >
      <div
        className={classNames({
          "flex justify-between gap-x-6": true,
          "gap-y-6": wphone,
        })}
      >
        <div
          className={classNames({
            "rounded-lg bg-back-blur bg-cover": true,
            "h-48 w-full": wphone,
            "h-96 w-1/2": !wphone,
          })}
        >
          {/*window.screen.width*/}
        </div>
        <div className={classNames({
          "flex items-center gap-x-6": true,
          "w-2/3 flex-col gap-y-6 mt-1" : wphone,
          "w-1/2" : !wphone 
        })}>
          <div
            className={classNames({
              "rounded-lg bg-[#46a094] bg-cover": true,
              "h-20 w-full": wphone,
              "w-1/2 h-96": !wphone,
            })}
          ></div>
          <div
            className={classNames({
              "rounded-lg bg-[#fdd037]": true,
              "h-20 w-full": wphone,
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
        <div className={classNames({
          "flex flex-col mt-6": true,
          "w-full":wphone,
          "w-1/2":!wphone
        })}>
          <div className={classNames({
            "bg-[#6bbd99] w-full rounded-lg": true,
            "h-20": wphone,
            "h-48": !wphone
          })}></div>
          <div className="flex mt-6 gap-x-6">
            <div className={classNames({
              "bg-[#aecfa4] w-1/2 rounded-lg": true, 
              "h-20" : wphone,
              "h-48": !wphone
            })}></div>
            <div className={classNames({
              "bg-[#c4e8c2] w-1/2 rounded-lg": true, 
              "h-20" : wphone,
              "h-48": !wphone
            })}></div>
          </div>
        </div>

        <div className={classNames({
          "flex items-center gap-x-6": true,
          "w-full": wphone,
          "mt-6 w-1/2": !wphone
        })}>
          <div className="w-1/2 flex flex-col">
            <div className="flex gap-x-6 mb-6">
              <div className={classNames({
                "bg-[#0295a9] w-1/2 rounded-lg": true,
                "h-24": wphone,
                "h-48": !wphone
              })}></div>
              <div className={classNames({
                "bg-[#12adc1] w-1/2 rounded-lg": true,
                "h-24": wphone,
                "h-48": !wphone
              })}></div>
            </div>
            <div className={classNames({
              "bg-[#e65c4f] w-full rounded-lg mb-6": true,
              "h-36": wphone,
              "h-48": !wphone
            })}></div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex gap-x-6 mb-6">
            <div className={classNames({
                "bg-wine bg-cover w-1/2 rounded-lg": true,
                "h-32": wphone,
                "h-48": !wphone
              })}></div>
              <div className={classNames({
                "bg-[#974063] w-1/2 rounded-lg": true,
                "h-32": wphone,
                "h-48": !wphone
              })}></div>
            </div>
            <div className="flex gap-x-6 mb-6">
            <div className={classNames({
                "bg-[#f54768] w-1/2 rounded-lg": true,
                "h-28": wphone,
                "h-48": !wphone
              })}></div>
              <div className={classNames({
                "bg-[#ff9677] w-1/2 rounded-lg": true,
                "h-28": wphone,
                "h-48": !wphone
              })}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

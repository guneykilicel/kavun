import classNames from "classnames";
import { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {

    const [wsize, setWsize] = useState(window.screen.width)
    const [wphone, setWphone] = useState(false)

    useEffect(()=>{
        setWsize(window.screen.width)
        setWphone(wsize<512)
    }, [window.screen.width])


  return (
    <div className={classNames({
        "mt-5": !wphone
    })}>
      <div className={classNames({
        "flex justify-between gap-x-6": true,
        "flex-col gap-y-6": wphone
      })}>
        <div className={classNames({
            "w-2/3 rounded-lg gradient-pink": true,
            "h-56 w-full" : wphone,
            "h-96" : !wphone
        })}>
          {/*window.screen.width*/}
          {console.log(wphone)}
        </div>
        <div className={classNames({
            "w-1/3 rounded-lg gradient-blue": true,
            "h-24 w-full" : wphone,
            "h-96" : !wphone
        })}></div>
      </div>

      <div className="mt-6 flex gap-x-6 inline">
        <div className={classNames({
            "w-2/3 h-96 flex gap-x-6": true,
            "flex-col gap-y-6" : wphone
        })}>
          <div className={classNames({
            "w-1/2 h-96 rounded-lg gradient-purple": true,
            "w-full" : wphone
          })}></div>
          <div className={classNames({
            "w-1/2 h-96 rounded-lg gradient-cyan": true,
            "w-full" : wphone
          })}></div>
        </div>

        <div className="w-1/3 h-96">
          <div className={classNames({
            "w-full h-1/2 flex gap-x-6": true,
            "w-full flex-col gap-y-6" : wphone
          })}>
            <div className={classNames({
                "w-1/2 h-44 gradient-orange rounded-lg": true,
                "w-full": wphone
            })}></div>
            <div className={classNames({
                "w-1/2 h-44 gradient-pink rounded-lg": true,
                "w-full": wphone
            })}></div>
          </div>
          <div className={classNames({
            "w-full h-1/2 flex gap-x-6": true,
            "flex-col": wphone
          })}>
            <div className={classNames({
                "w-1/2 h-44 gradient-dark-purple rounded-lg": true,
                "w-full mt-6": wphone
            })}></div>
            <div className=" invisible w-1/2 h-44 gradient-pink rounded-lg "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

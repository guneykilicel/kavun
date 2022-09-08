import classNames from "classnames"

const ContentCard = ({wphone, imgSrc, children})=>{
    return(
        <div
              className={classNames({
                "h-44 bg-[#244d61] rounded-xl": true,
                "w-full": wphone,
                "w-1/3": !wphone,
              })}
            >
              <div className="w-full h-full">
                <div className="flex h-3/4">
                  <div className={classNames({
                    "w-full flex": true,
                    "": wphone
                  })}>
                    <img
                      className={classNames({
                        "object-cover rounded-full ring-2 ring-white m-3": true,
                        "w-16 h-16": wphone,
                        "w-24 h-24": !wphone
                      })}
                      src={imgSrc}
                    />
                    <p className={classNames({
                        "text-white": true,
                        "mt-10 mr-3": !wphone,
                        "text-sm text-center mx-1 mt-4": wphone
                    })}>
                      {children}
                    </p>
                  </div>
                </div>
                <div className="h-1/4">
                  <button className="p-4 px-2.5 h-full bg-[#fdd037] w-full flex items-center justify-center gap-x-2 rounded-xl font-medium text-white text-sm disabled:bg-blue-300">
                    Devamını Oku...
                  </button>
                </div>
              </div>
            </div>
    )
}

export default ContentCard
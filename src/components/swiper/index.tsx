import { useInterval, useReactive, useToggle } from "ahooks";
import * as React from "react";
import "./style.scss";
import type { CSSProperties } from "react";
import { useCircle } from "@/hooks";
import { getImgUrl } from "@/utils";

interface SwiperListProps {
  classname: string;
  style: CSSProperties;
  innerStyle: CSSProperties[];
}

const length = 2;

const interval = 10;

const Swiper = () => {
  const swiperRef = React.useRef<HTMLDivElement>(null);

  const swiperList = useReactive<SwiperListProps[]>([]);
  const [count, setCount] = useCircle(length, "left");
  const [num, setNum] = useCircle(interval, "right");
  const [delay, { setLeft: setStart, setRight: setPause }] = useToggle(1000, undefined);
  const [flag, { setLeft, setRight }] = useToggle(true);

  const next = () => {
    if (flag) {
      return;
    }
    setPause();
    setNum(0.1);
    setCount(count - 1);
    updateStyle();
    setStart();
  };

  const prev = () => {
    if (flag) {
      return;
    }
    setPause();
    setNum(0.1);
    setCount(count + 1);
    updateStyle();
    setStart();
  };

  const updateStyle = () => {
    for (let i = 0; i < length; i++) {
      swiperList[i] = {
        classname: i === count ? "fade-in-up" : "fade-out-up",
        style: {
          transform: `translateX(${-i * Number(swiperRef.current?.offsetWidth)}px)`,
          transition: `all 2000ms`,
          opacity: i === count ? 1 : 0,
        },
        innerStyle: [
          {
            animationDelay: i === count ? "0.5s" : "0s",
          },
          {
            animationDelay: i === count ? "1s" : "0s",
          },
          {
            animationDelay: i === count ? "1.5s" : "0s",
          },
          {
            animationDelay: i === count ? "1s" : "0s",
          },
        ],
      };
    }
  };

  const timer = () => {
    setNum(num + 1);

    if (num === 0 || num === 0.1) {
      setLeft();
    }

    if (num === 0) {
      setCount(count - 1);
      updateStyle();
    }
    if (num >= 3 && num < 8) {
      setRight();
    }
  };

  useInterval(timer, delay, {
    immediate: true,
  });

  return (
    <div className="swiper bg-[#f5f5f5] h-700px relative flex overflow-hidden" ref={swiperRef}>
      {/* swiper-item */}
      {swiperList.map((_item, i) => (
        <div className="item w-full flex-shrink-0 flex items-center" key={i} style={swiperList[i].style}>
          <div className="container flex justify-center items-center space-x-20 mx-auto">
            <div className="flex flex-col items-center">
              <h2
                className={`text-center text-60px font-medium mb-6 text-[#4a4a4a] ${swiperList[i].classname}`}
                style={swiperList[i].innerStyle[0]}
              >
                Best Handmade
                <br />
                Goods
              </h2>
              <span
                className={`text-36px font-medium mb-9 text-[#4a4a4a] ${swiperList[i].classname}`}
                style={swiperList[i].innerStyle[1]}
              >
                <span>$25.00</span>
                <span className="text-[#eaaa85]">- $18.00</span>
              </span>
              <button
                className={`swiper-btn w-210px h-65px z-10 bg-[#eaaa85] relative overflow-hidden flex items-center justify-center rounded-[10px] text-white ${swiperList[i].classname} hover:(bg-transparent)`}
                style={swiperList[i].innerStyle[2]}
              >
                View Collection
              </button>
            </div>
            <div className="flex w-600px justify-center">
              <img
                src={getImgUrl(i === 0 ? "slider-1.png" : "slider-2.png")}
                alt="banner"
                className={`${swiperList[i].classname}`}
                style={swiperList[i].innerStyle[1]}
              />
            </div>
          </div>
        </div>
      ))}

      <div
        className="prev absolute top-1/2 left-7.5 transform -translate-y-1/2 w-12.5 h-12.5 rounded-1/2 flex items-center justify-center bg-white cursor-pointer text-xl opacity-0 invisible"
        onClick={() => prev()}
      >
        <i className="fa fa-angle-left"></i>
      </div>
      <div
        className="next absolute top-1/2 right-7.5 transform -translate-y-1/2 w-12.5 h-12.5 rounded-1/2 flex items-center justify-center bg-white cursor-pointer text-xl opacity-0 invisible"
        onClick={() => next()}
      >
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  );
};

export default Swiper;

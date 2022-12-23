import useGoodsStore from "@/store/useGoodsStore";
import { getImgUrl } from "@/utils";
import { useToggle, useMemoizedFn } from "ahooks";
import * as React from "react";
import Drawer from "../drawer";
import "./style.scss";
import shallow from "zustand/shallow";

// const list = [
//   {
//     name: "Hand-Made Garlic Mortar",
//     number: 1,
//     price: "$21.86",
//   },
//   {
//     name: "Handmade Ceramic Pottery",
//     number: 1,
//     price: "$21.86",
//   },
//   {
//     name: "Hand Painted Bowls",
//     number: 1,
//     price: "$21.86",
//   },
// ];

const WashList = () => {
  const [goodsList, drawerVisible] = useGoodsStore((state) => [state.goodsList, state.drawerVisible], shallow);
  const openDrawer = useGoodsStore((state) => state.openDrawer);
  const closeDrawer = useGoodsStore((state) => state.closeDrawer);
  const getItemTotalPrice = useGoodsStore((state) => state.getItemTotalPrice);
  const add = useGoodsStore((state) => state.addGoodsItem);
  const reduce = useGoodsStore((state) => state.reduceGoodsItem);
  const deleteItem = useGoodsStore((state) => state.deleteGoodsItem);

  let totalPrice = "0";
  if (goodsList.length !== 0) {
    totalPrice = goodsList
      .map((item) => Number(getItemTotalPrice(item)))
      .reduce((totalPrice, num) => totalPrice + num)
      .toFixed(2);
  }

  return (
    <>
      <button className="hover:(text-[#eaaa85])" onClick={() => openDrawer()}>
        <i className={`pe-7s-shopbag`}></i>
      </button>
      <Drawer visible={drawerVisible} onClose={useMemoizedFn(() => closeDrawer())}>
        <div className="p-5 h-full flex flex-col">
          {/* header */}
          <div className="flex justify-between items-center mb-7.5">
            <span className="text-[20px] leading-relaxed font-bold">Wishlist</span>
            <button className="relative h-5 w-5 close" onClick={useMemoizedFn(() => closeDrawer())}>
              <span className="line w-5 h-0.5 absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45 bg-[#eaaa85] transition-transform duration-300"></span>
              <span className="line w-5 h-0.5 absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-45 bg-[#eaaa85] transition-transform duration-300"></span>
            </button>
          </div>

          {/* body */}
          <ul className="flex flex-col space-y-7.5 flex-1">
            {goodsList.length === 0 ? (
              <p>Card is empty</p>
            ) : (
              <>
                {goodsList.map((item, i) => (
                  <li
                    className="flex w-full space-x-4 pb-7.5 border-b border-[#ebebeb] last-of-type:(border-none pb-0)"
                    key={item.name}
                  >
                    <a>
                      <img src={item.imgName} alt="" className="w-28 border border-[#ebebeb]" />
                    </a>
                    <div className="flex flex-col space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <a className="cursor-pointer font-medium text-sm hover:(text-[#eaaa85])">{item.name}</a>
                        <button className="hover:(text-[#eb2606])" onClick={() => deleteItem(i)}>
                          ×
                        </button>
                      </div>
                      <span className="text-sm flex-1">
                        {item.num} x <span className="font-medium text-lg text-[#eaaa85]">{item.price}</span>
                      </span>
                      <div className="align-bottom flex justify-between items-center">
                        <div>
                          <span className="text-blue-gray-500">total:</span>
                          <span className="ml-1">${getItemTotalPrice(item)}</span>
                        </div>
                        <div className="space-x-4 flex text-xs">
                          <span
                            className="w-4 h-4 rounded-sm flex justify-center items-center border text-red-600 cursor-pointer"
                            onClick={() => reduce(i)}
                          >
                            -
                          </span>
                          <span
                            className="w-4 h-4 rounded-sm flex justify-center items-center border cursor-pointer"
                            onClick={() => add(i)}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </>
            )}
          </ul>

          {goodsList.length === 0 ? (
            ""
          ) : (
            <p className="mt-3 text-right">
              <span className="text-lg text-blue-gray-500">
                total:
                <span className="ml-1 font-semibold text-black">${totalPrice}</span>
              </span>
            </p>
          )}

          {/* foot */}
          <div className=" flex">
            <button className="h-11.5 w-full block bg-black hover:(bg-[#eaaa85])">
              <span className="text-white font-medium capitalize">view wishlist</span>
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default WashList;

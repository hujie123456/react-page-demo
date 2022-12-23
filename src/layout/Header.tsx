import Dropdown, { DropdownProps } from "@/components/dropdown";
import { getImgUrl } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { useToggle } from "ahooks";
import WashList from "@/components/washlist";

interface MenuProps {
  title: string;
  isDrop: boolean;
  dropType?: DropdownProps["type"];
  visible?: boolean;
  toggle?: () => void;
}

const headerRightIcon = [
  {
    iconName: "search",
  },
  {
    iconName: "users",
  },
  {
    iconName: "like",
  },
];

const SubMenu = () => (
  <ul className="submenu flex flex-col">
    {["Home 1", "Home2 "].map((item) => (
      <li key={item}>
        <a href="#" className="block py-3 pl-5 text-[#2d2d2d] leading-5 hover:(pl-25px text-[#eaaa85])">
          Home 1
        </a>
      </li>
    ))}
  </ul>
);

const MetaMenu = () => {
  const arr = Array(3).fill("");

  return (
    <div className="metamenu flex">
      {arr.map((item, i) => (
        <ul className="flex flex-1 flex-col mr-7.5 border-r border-[#ebebeb]" key={i}>
          <li className="title font-medium leading-[1.875rem] mb-5">Inner Pages</li>
          <li className="text-14px leading-30px mb-3.75">123</li>
          <li className="text-14px leading-30px mb-3.75">123</li>
          <li className="text-14px leading-30px mb-3.75">123</li>
          <li className="text-14px leading-30px">123</li>
        </ul>
      ))}
      <div className="flex-1 mr-7.5">
        <img src={getImgUrl("menu-banner-1.jpeg")} alt="" />
      </div>
    </div>
  );
};

const Header = () => {
  const menu: MenuProps[] = [
    {
      title: "HOME",
      isDrop: true,
      dropType: "sub",
    },
    {
      title: "ABOUT",
      isDrop: false,
    },
    {
      title: "PAGES",
      isDrop: true,
      dropType: "mega",
    },
    {
      title: "SHOP",
      isDrop: true,
      dropType: "mega",
    },
    {
      title: "BLOG",
      isDrop: true,
      dropType: "sub",
    },
    {
      title: "CONTACT",
      isDrop: false,
    },
  ];

  menu.forEach((item) => {
    const [visible, { toggle }] = useToggle();
    item.visible = visible;
    item.toggle = toggle;
  });

  return (
    <header className="bg-[#fff8f4]">
      <div className="w-300 m-auto flex items-center relative">
        <img src={getImgUrl("logo.png")} alt="" className="px-3" />
        <div className="px-3 flex-1">
          <div className="flex justify-center">
            <ul className="flex flex-wrap space-x-12.5">
              {menu.map((item) => (
                <li
                  className={`${item.isDrop ? "dropdown" : ""} ${
                    item.dropType === "sub" ? "relative" : "static"
                  } hover:(text-[#eaaa85])`}
                  key={item.title}
                  onMouseEnter={() => item.toggle!()}
                  onMouseLeave={() => item.toggle!()}
                >
                  <a href="#" className="leading-30 inline-block">
                    {item.title} {item.isDrop ? <i className="fa fa-angle-down"></i> : null}
                  </a>
                  {item.isDrop ? (
                    <Dropdown type={item.dropType!} visible={item.visible}>
                      {item.dropType === "sub" ? <SubMenu /> : <MetaMenu />}
                    </Dropdown>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-3">
          <div className="flex space-x-4.5 text-[1.625rem]">
            {headerRightIcon.map((item) => (
              <button className="hover:(text-[#eaaa85])" key={item.iconName}>
                <i className={`pe-7s-${item.iconName}`}></i>
              </button>
            ))}
            <WashList />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

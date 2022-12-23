import GoodsItem from "./goodsItem";
import Goods1 from "@/assets/img/wishlist-1.jpeg";
import Goods2 from "@/assets/img/2.jpeg";
import Goods3 from "@/assets/img/3.jpeg";

const goodsNumber = [
  {
    imgName: Goods1,
    name: "Hand-Made Garlic Mortar",
    price: "38.50",
  },
  {
    imgName: Goods2,
    name: "Handmade Ceramic Pottery",
    price: "22.50",
  },
  {
    imgName: Goods3,

    name: "Hand Painted Bowls",
    price: "12.50",
  },
];

const GoodsList = () => {
  return (
    <div className="mt-100px container m-auto mt-24 pb-24">
      <h2 className="text-[36px] text-[#424242] text-center mb-6">Popular Categories</h2>
      <p className="m-auto text-center text-[#747474] w-[576px] leading-7">
        Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod incididunt ut labore et dolore magna
        aliqua.{" "}
      </p>
      <div className="flex justify-between mt-12">
        {goodsNumber.map((item) => (
          <GoodsItem {...item} key={item.name}></GoodsItem>
        ))}
      </div>
    </div>
  );
};

export default GoodsList;

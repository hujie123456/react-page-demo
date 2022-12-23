import useGoodsStore from "@/store/useGoodsStore";
import "./item.scss";

interface Props {
  name: string;
  price: string;
  imgName: string;
}

const GoodsItem = (props: Props) => {
  const goodsList = useGoodsStore((state) => state.goodsList);
  const openDrawer = useGoodsStore((state) => state.openDrawer);
  const addGoodsType = useGoodsStore((state) => state.addGoodsType);

  return (
    <div className="goods-item basis-1/4 bg-[#F8F8F8] py-3 relative overflow-hidden flex flex-col items-center">
      <div className="text-xs text-white bg-black absolute top-18px -left-2px rounded-sm px-10px leading-5 font-medium">
        NEW
      </div>
      <img src={props.imgName} alt="" className="w-4/5" />
      <p className="text-base text-[#747474] font-medium item-title">{props.name}</p>
      <span className="text-[#393939] font-medium py-4">${props.price}</span>
      <button
        className="bg-[#eaaa85] flex justify-center items-center w-130px rounded-lg item-btn"
        onClick={() => {
          openDrawer();
          if (!goodsList.some((item) => item.name === props.name)) {
            addGoodsType({
              num: 1,
              name: props.name,
              price: props.price,
              imgName: props.imgName,
            });
          }
        }}
      >
        <span className="text-white leading-10 text-sm">ADD TO CARD</span>
      </button>
    </div>
  );
};

export default GoodsItem;

import create from "zustand";

interface GoodItemProps {
  num: number;
  name: string;
  price: string;
  imgName: string;
}

interface GoodsProps {
  goodsList: GoodItemProps[];
  drawerVisible: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addGoodsType: (item: GoodItemProps) => void;
  addGoodsItem: (i: number) => void;
  reduceGoodsItem: (i: number) => void;
  deleteGoodsItem: (i: number) => void;
  getItemTotalPrice: (item: GoodItemProps) => string;
}

const useGoodsStore = create<GoodsProps>((set) => ({
  goodsList: [],
  drawerVisible: false,
  openDrawer: () => set(() => ({ drawerVisible: true })),
  closeDrawer: () => set(() => ({ drawerVisible: false })),
  addGoodsType: (item: GoodItemProps) =>
    set((state) => {
      state.goodsList.push(item);
      return {
        goodsList: [...state.goodsList],
      };
    }),
  addGoodsItem: (i: number) =>
    set((state) => {
      state.goodsList[i].num++;
      return {
        goodsList: [...state.goodsList],
      };
    }),
  reduceGoodsItem: (i: number) =>
    set((state) => {
      if (state.goodsList[i].num > 0) {
        state.goodsList[i].num--;
      }
      return {
        goodsList: [...state.goodsList],
      };
    }),
  deleteGoodsItem: (i: number) =>
    set((state) => {
      state.goodsList.splice(i, 1);
      return {
        goodsList: [...state.goodsList],
      };
    }),
  getItemTotalPrice: (item: GoodItemProps) => (Number(item.price) * item.num).toFixed(2),
  removeAllGoods: () => set({ goodsList: [] }),
}));

export default useGoodsStore;

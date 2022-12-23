import GoodsList from "@/components/goodsList";
import Loading from "@/components/loading";
import Swiper from "@/components/swiper";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Swiper />
      <GoodsList />
    </>
  );
};

export default Layout;

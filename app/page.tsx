import Products from './components/Products';
import Banner from './components/Banner';
import Category from './components/Category';
import Features from './components/Features';
import Ads from './components/Ads';
import HomeProduct from './components/HomeProduct';
import NewsLetter from './components/NewsLetter';
export default function Home() {
  return (
    <div className="">
      <Banner/>
      <Category/>
      <Features/>
      <Ads/>
      <HomeProduct/>
      <NewsLetter/>
      <Products/>
    </div>
  );
}

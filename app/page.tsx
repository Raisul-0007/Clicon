import Products from './components/Products';
import Banner from './components/Banner';
import Category from './components/Category';
import Features from './components/Features';
import Ads from './components/Ads';
export default function Home() {
  return (
    <div className="">
      <Banner/>
      <Category/>
      <Features/>
      <Ads/>
      <Products/>
    </div>
  );
}

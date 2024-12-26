
import SearchToursForm from "@/components/templates/SearchToursForm";
import { serverFetch } from '@/core/services/http';
import AdvertisementSection from '@/components/templates/AdvertisementSection';
import ToursList from '@/components/templates/TourList';



// SSR Page
async function Home() {
  // fetching data
  const data = await serverFetch("/tour")
  if (!data) return <div className="mt-4 text-red-500 text-center">مشکلی پیش آمده است </div>
  if (!data.length && !fetchError) return <p>Loading...</p>;

  return (
    <>
      <h1 className="font-semibold mt-6 text-[#595959] text-[1.6rem] md:text-[2.8rem] w-full text-center"><span className="text-primary"> تورینو </span>برگزارکننده بهترین تورهای داخلی و خارجی</h1>
      {/* search box section */}
      <SearchToursForm data={data} />
      {/* tours list section */}
      <ToursList data={data} />
      {/* advertisement section */}
      <AdvertisementSection />
    </>

  );
}

export default Home

import { notFound } from 'next/navigation'

import SearchToursForm from "@/components/templates/SearchToursForm";
import Card from "@/components/ui/organisms/Card";
import { serverFetch } from '@/core/services/http';


// SSR Page
 async function Home() {

  const data = await serverFetch("/tour")
  if(!data) return  <div className="mt-4 text-red-500 text-center">مشکلی پیش آمده است </div>
  if (!data.length && !fetchError) return <p>Loading...</p>;

  return (
    <>
    <h1 className="font-semibold mt-6 text-[#595959] text-[1.6rem] md:text-[2.8rem] w-full text-center"><span className="text-primary"> تورینو </span>برگزارکننده بهترین تورهای داخلی و خارجی</h1>
      {/* search box */}
      <SearchToursForm data={data}/>
      {/* tours list */}
      <div>
        <div className="py-16  sm:py-24 ">
          <h2 className="text-[2rem] md:text-[3.2rem] font-normal leading-[6rem] tracking-tight">همه تورها</h2>
          <div className="  grid grid-cols-1 gap-[5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
            {data?.map((tourItem) => (
              <Card key={tourItem.id} tour={tourItem} />
            ))}
          </div>
        </div>   
      </div>
    </>

  );
}

export default Home

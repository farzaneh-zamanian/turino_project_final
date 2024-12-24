import SearchToursForm from "@/components/templates/SearchToursForm";
import Card from "@/components/ui/organisms/Card";
import TourBookingForm from "@/components/ui/organisms/TourBookingForm";
import { notFound } from 'next/navigation'



export default async function Home() {
  // Variables for fetching data
  let data = [];
  let fetchError = null;


  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`);
    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      if (res.status === 404) {
        return notFound(); // Redirect to 404 page
      }
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }
    // Parse the JSON response
    data = await res.json();

  } catch (err) {
    fetchError = err; // Store the error for later use
  }
  // Show loading state while data is being fetched
  if (!data.length && !fetchError) return <p>Loading...</p>;





  // data = data.splice(0, 10);
  return (
    <>
      {/* search box */}
      <SearchToursForm data={data}/>
       <TourBookingForm data={data} />
      {/* Display tours */}
      <div>
        <div className="py-16  sm:py-24 ">
          <h2 className="text-[2rem] leading-[3rem] tracking-tight">همه تورها</h2>

          <div className="  grid grid-cols-1 gap-[5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
            {data?.map((tourItem) => (
              <Card key={tourItem.id} tour={tourItem} />
            ))}
          </div>
        </div>

        {/* Display error message */}
        {fetchError && (
          <div className="mt-4 text-red-500 text-center">Error: {fetchError.message}</div>
        )}


      </div>
    </>

  );
}

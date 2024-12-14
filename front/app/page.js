import Card from "@/components/ui/organisms/Card";


export default async function Home() {
  let data = [];
  let error = null;
  // const PersianDatePicker = dynamic(() => import("./components/ui/organisms/PersianDatePicker"), { ssr: false });

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`);

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      // if (res.status === 500) {
      //   // Redirect to server error page
      //   return {
      //     redirect: {
      //       destination: '/server-error',
      //       permanent: false,
      //     },
      //   };
      // } else if (res.status === 400) {
      //   // Redirect to not found page
      //   return {
      //     notFound: true, // This will trigger the 404 page
      //   };
      // }
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    data = await res.json();
  } catch (err) {
    console.error('Error fetching data:', err);
    error = err; // Store the error for later use
  }

  // Show loading state while data is being fetched
  if (!data.length && !error) return <p>...Loading</p>;

  // Show error message if there's an error
  if (error) return <div>Error: {error.message}</div>;





  // data = data.splice(0, 10);
  return (
    <>
      {/* search box */}
      {/* <SearchBox/> */}
    



      <div>
        <div className="py-16  sm:py-24 ">
          <h2 className="text-[2rem] leading-[3rem] tracking-tight">همه تورها</h2>

          <div className="  grid grid-cols-1 gap-[5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
            {data?.map((tourItem) => (
              <Card key={tourItem.id} tour={tourItem} />
            ))}
          </div>
        </div>
        {/* {error ? (
        <div>Error: {error.message}</div> // Display error message if there's an error
      ) : ( */}

        {/* )} */}
      </div>
    </>

  );
}

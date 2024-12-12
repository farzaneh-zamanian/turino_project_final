import Card from "@/components/ui/organisms/Card";
import { api } from "@/core/configs/api";
export default async function Home() {
  let data = [];
  let error = null; 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`);
    data = await res.json();
  //   try {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`);
      
  //     // Check if the response is ok (status in the range 200-299)
  //     if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //     }
  
  //     const data = await res.json();
  //     return data
  //     // You can now use the data as needed
  // } catch (error) {
  //     console.error('Error fetching data:', error);
  //     // Handle the error (e.g., set an error state, show a message to the user, etc.)
  // }
  

  if (!data) return <p>...Loading</p>;

  // data = data.splice(0, 10);
  return (
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
  );
}

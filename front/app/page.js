import { api } from "@/configs/api";
export default async function Home() {
  let data = [];
  let error = null;

  try {
    const response = await api.get("/tour");
    data = response.data; // Assuming response.data contains the array of tour items
  } catch (err) {
    error = err; // Capture the error
    console.error("Error fetching tour data:", error);
  }


  ;
  // data = data.splice(0, 10);
  return (
    <div >
      {error ? (
        <div>Error: {error.message}</div> // Display error message if there's an error
      ) : (
        <ul >
          {data?.map(tourItem => (
            <li key={tourItem.id}>{tourItem.destination.name}</li>
          ))}
        </ul>
      )}
    </div>    
  );
}

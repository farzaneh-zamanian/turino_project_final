import ModalContainer from "@/components/partial/container/ModalContainer";
import AuthForm from "@/components/templates/authForm";
import Card from "@/components/ui/organisms/Card";
import { api } from "@/core/configs/api";
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

  if (!data) return <p>...Loading</p>;

  // data = data.splice(0, 10);
  return (
    <div>
      <ModalContainer/>
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

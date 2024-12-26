import QueryString from "qs";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const serverFetch = async (
  endpoint,
  query,
  cache = { cache: "force-cache" }
) => {
  let url = BASE_URL;
  if (endpoint) url += endpoint;
  if (query) url += `?${QueryString.stringify(query)}`;

  console.log(url)

  try {
    const res = await fetch(`${url}`, cache);
    // if (!res.ok) {
    //     if (res.status === 404) {
    //       return notFound(); // Redirect to 404 page
    //     }
    //     throw new Error(`Error ${res.status}: ${res.statusText}`);
    //   }

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);//show log in server console
    return error?.message;
  }
};

export { serverFetch };

import client from "./sanityclient";

export const fetchData = async (query) => {
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
};



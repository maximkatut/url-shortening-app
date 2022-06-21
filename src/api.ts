const BS_API_URL = "https://api.shrtco.de/v2/shorten?url=";

export const api = () => {
  return {
    get: async (url: string) => {
      try {
        const res = await fetch(`${BS_API_URL}${url}`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  };
};

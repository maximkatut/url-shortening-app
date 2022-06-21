import { useState } from "react";
import { IAdaptedData } from "../utils/dataAdapter";

export const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState<[] | IAdaptedData[]>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const setValue = (value: IAdaptedData) => {
    try {
      setStoredValue((prevState) => [...prevState, value]);
      setStoredValue((prevState) => {
        window.localStorage.setItem(key, JSON.stringify(prevState));
        return prevState;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { storedValue, setValue };
};

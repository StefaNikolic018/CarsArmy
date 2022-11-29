/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, useCallback } from "react";

import { IProps } from "../interfaces/standard";
import { GlobalContextI } from "../interfaces/contexts";
import { calculateArmyParts } from "../utils/calculateParts";
import useFirebaseContext from "../hooks/useFirebaseContext";

export const GlobalContext = createContext<GlobalContextI>({
  handleSearch: (_input: number) => {
    return;
  },
  result: [],
  isLoading: false,
  data: {} as never,
  error: null,
});

export default function GlobalContextProvider({ children }: IProps) {
  const [result, setResult] = useState<number[]>([]);

  // Structured data like regular React Query
  const { data, isLoading, error } = useFirebaseContext();

  const handleSearch = useCallback(
    (input: number) => {
      // Calculating the Car Army Parts
      const res = calculateArmyParts(input, data);
      //   Setting result
      setResult(res);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setResult, data?.length]
  );

  return (
    <GlobalContext.Provider
      value={{ handleSearch, result, data, isLoading, error }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

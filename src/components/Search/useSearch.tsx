import React, { useRef, useCallback, RefObject } from "react";
import useFirebaseContext from "../../hooks/useFirebaseContext";

import useGlobalContext from "../../hooks/useGlobalContext";

export default function useSearch() {
  const { handleSearch } = useGlobalContext();
  const { data } = useFirebaseContext();

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Event handler function for mobile and desktop devices
  // Accepts Mouse and Keyboard events and handles the input value
  const handleInput = useCallback(
    (
      event:
        | React.MouseEvent<HTMLSpanElement>
        | React.KeyboardEvent<HTMLInputElement>
        | undefined
    ) => {
      if (
        (event as React.MouseEvent).type === "click" ||
        ((event as React.KeyboardEvent).type === "keydown" &&
          (event as React.KeyboardEvent).key === "Enter" &&
          data?.length <= Number(inputRef.current?.value))
      ) {
        handleSearch(Number(inputRef.current?.value));
      }
    },
    [
      handleSearch,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (inputRef as RefObject<HTMLInputElement>).current?.value,
      data?.length,
    ]
  );

  return { handleInput, inputRef, data };
}

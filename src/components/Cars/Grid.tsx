import React, { memo } from "react";

import { CarI } from "../../interfaces/contexts";

import useGlobalContext from "../../hooks/useGlobalContext";

import Car from "./Car";
import Spinner from "../Spinner";
import StyledDisplayWrap from "../styled/StyledDisplayWrap";
import { DocumentSnapshot, DocumentData } from "firebase/firestore";

// Render cars function that is outside of the component
// because we don't need to reacreate it on every render
const renderCars = (
  results: number[],
  data: CarI[] | DocumentSnapshot<DocumentData>
) => {
  // Returning Array of Car components hydrated with data
  return (data as CarI[]).map((d: CarI, i: number) => (
    <Car key={d.id} name={d.name} amount={results[i]} img={d.img} />
  ));
};

const Grid = () => {
  const { result, data, isLoading } = useGlobalContext();

  if (isLoading)
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );

  return (
    <StyledDisplayWrap>
      {result.length === 0 ? (
        <h1 id="message">Enter desired number</h1>
      ) : (
        renderCars(result, data)
      )}
    </StyledDisplayWrap>
  );
};

export default memo(Grid);

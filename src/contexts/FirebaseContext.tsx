import React, { createContext, useMemo } from "react";
import { IProps } from "../interfaces/standard";
import { FirebaseContextI } from "../interfaces/contexts";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import {
  query,
  collection,
  getFirestore,
  DocumentData,
} from "firebase/firestore";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

export const FirebaseContext = createContext<FirebaseContextI | DocumentData>({
  isLoading: false,
  data: {} as never,
  error: null,
});

export default function FirebaseContextProvider({ children }: IProps) {
  const firebase = useMemo(() => initializeApp(firebaseConfig), []);

  const firestore = useMemo(() => getFirestore(firebase), [firebase]);

  const ref = useMemo(() => query(collection(firestore, "cars")), [firestore]);

  // { isLoading, data, error }
  const cars = useFirestoreQuery(["cars"], ref);

  // Cleaning data function because when we get the data from Firebase
  // it will be in some strange structure so we need to get rid
  // of all the metadata and other things that we are not interested in
  const cleanData = useMemo(() => {
    if (cars.data) {
      const clean = cars.data.docs.map((docSnapshot) => docSnapshot.data());
      return clean;
    }
  }, [cars]);

  return (
    <FirebaseContext.Provider value={{ ...cars, data: cleanData }}>
      {children}
    </FirebaseContext.Provider>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react'
import { FirebaseContext } from '../contexts/FirebaseContext'
export default function useFirebaseContext() {
    // { isLoading, data, error }
    const cars = useContext(FirebaseContext)

    return { ...cars }
}

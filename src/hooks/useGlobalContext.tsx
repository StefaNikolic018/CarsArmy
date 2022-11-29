/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

export default function useGlobalContext() {
    // { handleSearch, result, isFetching }
    const global = useContext(GlobalContext)

    return { ...global }
}

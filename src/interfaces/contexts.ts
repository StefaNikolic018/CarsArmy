/* eslint-disable @typescript-eslint/no-explicit-any */
import { DocumentSnapshot } from 'firebase/firestore'
export interface GlobalContextI {
    handleSearch: (input: number) => void
    result: number[]
    isLoading: boolean
    data: DocumentSnapshot | never
    error: Error | unknown
}

export interface CarI {
    id: number
    name: string
    img?: string
}

export interface FirebaseContextI {
    isLoading: boolean
    data: DocumentSnapshot | never
    error: Error | unknown
}


// zustand immer
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type PoopyStore = {
  poops: 0,
  increment: () => void,
  decrement: () => void,
}

export const usePoopyStore = create< PoopyStore >()(
  immer( ( set ) => ({
    poops: 0,
    increment: () => set( state => { state.poops += 1 }),
    decrement: () => set( state => { state.poops -= 1 }),
  }))
)

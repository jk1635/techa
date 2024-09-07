import { atom } from 'jotai';

import { FilterState } from '@/types';

export const initialFilterState: FilterState = {
  Background: [],
  Wing: [],
  Hand: [],
  Gloves: [],
  Weapon: [],
  Body: [],
  Dress: [],
  Face: [],
  Eyes: [],
  Hair: [],
  Mask: [],
  Earring: [],
  Head: [],
};

export const filterState = atom<FilterState>(initialFilterState);

export const searchState = atom<string>('');

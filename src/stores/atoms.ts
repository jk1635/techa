import { atom } from 'recoil';

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

export const filterState = atom<FilterState>({
  key: 'filterState',
  default: initialFilterState,
});

export const searchState = atom<string>({
  key: 'searchState',
  default: '',
});

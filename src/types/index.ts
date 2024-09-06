type FilterKeys =
  | 'Background'
  | 'Wing'
  | 'Hand'
  | 'Gloves'
  | 'Weapon'
  | 'Body'
  | 'Dress'
  | 'Face'
  | 'Eyes'
  | 'Hair'
  | 'Mask'
  | 'Earring'
  | 'Head';

export type FilterState = Record<FilterKeys, string[]>;

export interface Techa {
  name: string;
  image: string;
  description: string;
  attributes: Attribute[];
}

export interface Attribute {
  trait_type: string;
  value: string;
}

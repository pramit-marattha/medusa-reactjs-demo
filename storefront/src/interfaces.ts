export type NewClothing = {
  title: string;
  description: string;
  price: number;
};

export type Product = {
  title: string;
  description: string;
  thumbnail: string;
  prices: any;
  amount: number;
  variants: [];
  _id: number;
};

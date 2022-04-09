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

export type RequestsObject = {
  updateClothing: Function;
  deleteClothing: Function;
};

export type ClothingComponentProps = {
  clothing: Product;
  requests: RequestsObject;
};

export type ClothingFormProps = {
  clothing: Product;
  requests: RequestsObject;
  changeComponentState: Function;
};

export type ComponentProps = {
  children: React.ReactNode;
};

export type FormProps = {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export interface TextProps extends ComponentProps {
  type?: "p" | "b";
}

export interface TitleProps extends ComponentProps {
  type?: "h1" | "h2" | "h3";
}

export interface ProductPicture extends Record<string, any> {
  id: string;
  url: string;
}

export interface Product extends Record<string, any> {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  sold_quantity: number;
  condition: string;
  pictures: ProductPicture[];
}

export interface Review {
  id: number;
  title: string;
  content: string;
  rating: number;
  upvotes: number;
  downvotes: number;
}

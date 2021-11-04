export type Product = {
  name: string;
  description: string;
  price: number;
  productId: number;
}

export const products: Array<Product> = [
  {
    name: 'Phone XL',
    description: 'Description: A large phone ',
    price: 800,
    productId: 1
  },
  {
    name: 'Phone Mini',
    description: 'A great phone',
    price: 600,
    productId: 2
  },
  {
    name: 'Phone Standard',
    description: '',
    price: 100,
    productId: 3
  },
]

type product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

interface CartState {
  products: product[];
  add: (product: product) => void;
  remove: (id: string) => void;
  clear: () => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
}

export type {CartState, product};

import {create} from 'zustand';
import {CartState} from './cartstore.type';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCartStore = create<CartState>()(
  persist(
    set => ({
      products: [],
      add: product =>
        set(state => {
          const exists = state.products.find(p => p.id === product.id);
          if (exists) {
            return {
              products: state.products.map(p =>
                p.id === product.id
                  ? {...p, quantity: p.quantity + product.quantity}
                  : p,
              ),
            };
          }
          return {products: [...state.products, product]};
        }),
      remove: id =>
        set(state => ({
          products: state.products.filter(p => p.id !== id),
        })),
      clear: () => set({products: []}),
      increment: id =>
        set(state => ({
          products: state.products.map(p =>
            p.id === id ? {...p, quantity: p.quantity + 1} : p,
          ),
        })),
      decrement: id =>
        set(state => ({
          products: state.products
            .map(p => (p.id === id ? {...p, quantity: p.quantity - 1} : p))
            .filter(p => p.quantity > 0),
        })),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export {useCartStore};

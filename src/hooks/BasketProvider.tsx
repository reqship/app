import { Item } from "@/api/items";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface BasketContextInterface {
  items: BasketItem[];
  total: number;
  totalItems: number;
  setItems: (items: BasketItem[]) => void;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  editItemQuantity: (item: Item, quantity: number) => void;
  clear: () => void;
}

export interface BasketItem extends Item {
  quantity: number;
}

const BasketContext = createContext<BasketContextInterface | undefined>(
  undefined
);

export const BasketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [items, setItems] = useState<BasketItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  const addItem = (item: Item) => {
    setItems((items) => {
      if (items.find((x) => x.id === item.id)) {
        return items.map((x) =>
          x.id === item.id ? { ...item, quantity: x.quantity + 1 } : x
        );
      } else {
        return [...items, { ...item, quantity: 1 }];
      }
    });
  };
  const removeItem = (item: Item) => {
    setItems((items) => items.filter((x) => x.id !== item.id));
  };

  const editItemQuantity = (item: Item, quantity: number) => {
    setItems((items) =>
      items.map((x) => (x.id == item.id ? { ...x, quantity } : x))
    );
  };
  const clear = () => {
    setItems([]);
  };

  useEffect(() => {
    setTotal(
      items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    );
    setTotalItems(items.reduce((prev, curr) => prev + curr.quantity, 0));
  }, [items]);

  return (
    <BasketContext.Provider
      value={{
        items,
        total,
        totalItems,
        clear,
        setItems,
        addItem,
        removeItem,
        editItemQuantity,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error("useBasketContext must be used within a BasketProvider");
  }

  return context;
};

export default BasketContext;

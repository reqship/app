import { Item } from "@/api/items";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface TableContextInterface {
  table: string;
  setTable: (table: string) => void;
  clear: () => void;
}

const TableContext = createContext<TableContextInterface | undefined>(
  undefined
);

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const [table, setTable] = useState<string>("");
  const clear = () => {
    setTable("");
  };

  return (
    <TableContext.Provider
      value={{
        table,
        setTable,
        clear,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error("useBasketContext must be used within a BasketProvider");
  }

  return context;
};

export default TableContext;

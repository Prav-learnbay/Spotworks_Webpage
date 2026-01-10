import { createContext, useContext, useState, ReactNode } from "react";

interface DemoDialogContextType {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const DemoDialogContext = createContext<DemoDialogContextType | undefined>(undefined);

export function DemoDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <DemoDialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </DemoDialogContext.Provider>
  );
}

export function useDemoDialog() {
  const context = useContext(DemoDialogContext);
  if (context === undefined) {
    throw new Error("useDemoDialog must be used within a DemoDialogProvider");
  }
  return context;
}


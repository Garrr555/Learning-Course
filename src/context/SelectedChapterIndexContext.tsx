import { createContext, Dispatch, SetStateAction } from "react";

export const SelectedChapterIndexContext = createContext<{
  selectedChapterIndex: number;
  setSelectedChapterIndex: Dispatch<SetStateAction<number>>;
} | null>(null);

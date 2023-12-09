import { create } from "zustand";

// Stores currently selected chapter
// chapter = 0 if none are selected

interface ChapterState {
    chapter: number;
    setChapter: (chapter: number) => void;
}

export const useChapterStore = create<ChapterState>()((set) => ({
    chapter: 0,
    setChapter: (value) => set(() => ({ chapter: value })),
}));

// Stores the user search
// If user hasn't searched anything string is empty

interface SearchState {
    search: string;
    setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
    search: "",
    setSearch: (value) => set(() => ({ search: value })),
}));

// Stores experiment sort order
// Valid values are "chapter", "title", "duration"

interface SortState {
    sort: string;
    setSort: (sort: string) => void;
}

export const useSortStore = create<SortState>()((set) => ({
    sort: "chapter",
    setSort: (value) => set(() => ({ sort: value })),
}));

// Stores total number of experiments and number of visible experiments
// Visible experiments are the ones displayed after all filters are applied

interface CountState {
    visibleCount: number;
    setVisibleCount: (visible: number) => void;
    totalCount: number;
    setTotalCount: (total: number) => void;
}

export const useCountStore = create<CountState>()((set) => ({
    visibleCount: 0,
    setVisibleCount: (value) => set(() => ({ visibleCount: value })),
    totalCount: 0,
    setTotalCount: (value) => set(() => ({ totalCount: value })),
}));

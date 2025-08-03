import { create } from "zustand";

interface I_Menu {
    ItemId: string;
    ItemNm: string;
    ActiveColor: string;
};

interface I_MenuStore {
    Menues: I_Menu[];
};

export const MenuStore = create<I_MenuStore>(() => ({
    Menues: [
        {ItemId: "Home", ItemNm: "홈", ActiveColor: "red"},
        {ItemId: "Series", ItemNm: "시리즈", ActiveColor: "orange"},
        {ItemId: "Movies", ItemNm: "영화", ActiveColor: "green"},
        {ItemId: "Bests", ItemNm: "인기 컨텐츠", ActiveColor: "blue"}
    ]
}));
import {WineCategoryEnum} from "wlist-types"

export const showVintage = (category: WineCategoryEnum) => {
    const excludedCategories = [
        WineCategoryEnum.GRAPPA,
        WineCategoryEnum.LIQUEUR,
        WineCategoryEnum.AQUAVIT,
    ];

    return !excludedCategories.includes(category);
};

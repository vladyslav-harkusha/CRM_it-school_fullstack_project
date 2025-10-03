export const createPagesArr = (
    pagesCount: number | undefined,
    currPage: number,
    buttonsCount = 7,
): string[] => {
    if (!pagesCount || pagesCount < 1) return [];

    if (pagesCount <= buttonsCount) {
        return Array.from({ length: pagesCount }, (_, i) => String(i + 1));
    }

    const firstPage = 1;
    const lastPage = pagesCount;
    const middleWindow = buttonsCount - 2;
    const start = Math.max(currPage - Math.floor(middleWindow / 2), 2);
    const end = Math.min(start + middleWindow - 1, lastPage - 1);
    const pages = [String(firstPage)];

    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) {
        pages.push(String(i));
    }

    if (end < lastPage - 1) pages.push("...");

    pages.push(String(lastPage));

    if (currPage > 1) pages.unshift("<");
    if (currPage < pagesCount) pages.push(">");

    return pages;
};

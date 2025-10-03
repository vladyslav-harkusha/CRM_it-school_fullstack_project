export const createPagesArr = (
    pagesCount: number | undefined,
    currPage: number,
    windowSize = 7,
): string[] => {
    if (!pagesCount || pagesCount < 1) return [];
    if (pagesCount <= windowSize)
        return Array.from({ length: pagesCount }, (_, i) => String(i + 1));

    const firstPage = 1;
    const lastPage = pagesCount;
    const middleWindow = windowSize - 2;
    let start = Math.max(currPage - Math.floor(middleWindow / 2), 2);
    let end = start + middleWindow - 1;
    const pages = [`${firstPage}`];

    if (end >= lastPage) {
        end = lastPage - 1;
        start = end - middleWindow + 1;
    }

    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) {
        pages.push(String(i));
    }

    if (end < lastPage - 1) pages.push("...");

    pages.push(String(lastPage));

    if (currPage > 1) pages.unshift("<");
    if (currPage < lastPage) pages.push(">");

    return pages;
};

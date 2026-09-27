export function trimText(text: string, maxLenth: number) {
    const trimedText = text.length < maxLenth ? text : `${text.slice(0 , maxLenth)}...`;
    return trimedText
}
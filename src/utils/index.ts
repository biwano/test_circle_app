export const cutString = (text: string) => {
    if (text.length < 10) return text;
    return `${text.substring(0,5)}...${text.substring(text.length - 5)}`
}
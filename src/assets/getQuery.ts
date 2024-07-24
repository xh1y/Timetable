/**
 * Create time: 2024 07 24  14:32:46
 * File name: getQuery.ts
 * Path: src/assets
 * About:
 */

export function getQuery(location: string[]) {
    const totalInformation: any = {}
    for (const words of location) {
        console.log(words)
        const word = words.split('=')
        console.log(word)
        // totalInformation.push({ [word[0]]: word[1] })
        totalInformation[word[0]] = word[1]
    }
    console.log(totalInformation)

    return totalInformation
}

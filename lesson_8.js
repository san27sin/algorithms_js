function solution(string) {
    if (string === '') {
        return ''
    }

    let str = string
    const chars = []

    for (const letter of str) {
        if (letter === letter.toUpperCase() && !chars.includes(letter)) {
            chars.push(letter)
        }
    }

    for (const a of chars) {
        str = str.replaceAll(a, ` ${a}`)
    }

    return str;
}

console.log(solution("highComeHaveProblemPersonLook"))
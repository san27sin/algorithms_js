// палиндром - число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.

var nearestPalindromic = function(n) {
    const polindroms = generatePolindrom(n)
    console.log(polindroms)
    const number = Number(n)
    const obj = {
        distance: -1,
        polindrom: 0,
    }

    polindroms.forEach(pol => {
        if (pol === 88) {
            const j = 8
        }
        const difference = pol > number ? pol - number : number - pol
        if ((obj.distance === -1 || difference < obj.distance) && difference !== 0) {
            obj.polindrom = pol
            obj.distance = difference
        }
    })

    return obj.polindrom.toString()
}

function generatePolindrom(n) {
    const length = n.length
    const polindroms = [0]
    let startNumber = '1'
    let endNumber = '9'
    let count = 0
    while(count++ < length) {
        endNumber += '9'
    }

    for (let a = Number(startNumber); a <= Number(endNumber); a++) {
        if (a == a.toString().split("").reverse().join("")) {
            polindroms.push(a)
        }
    }

    return polindroms
}

console.log(nearestPalindromic('1'))


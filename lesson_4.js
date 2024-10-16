// палиндром - число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.
// мое решение
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

// console.log(nearestPalindromic('1'))

// решение преподавателя
function closestPalindrome(n) {
    const length = n.length;
    const candidates = new Set();

    // Простые случаи, типа 999...999 и 100...001
    candidates.add(String(10 ** (length - 1) - 1));  // Пример: 999 для трехзначных чисел
    candidates.add(String(10 ** length + 1));  // Пример: 1001 для трехзначных чисел

    // Первая половина числа
    const prefix = parseInt(n.slice(0, Math.ceil(length / 2)));

    // Создаем кандидатов на основе первой половины
    for (let i = -1; i <= 1; i++) {
        const newPrefix = String(prefix + i);
        let candidate;

        if (length % 2 === 0) {
            // Если длина четная
            candidate = newPrefix + newPrefix.split('').reverse().join('');
        } else {
            // Если длина нечетная
            candidate = newPrefix + newPrefix.slice(0, -1).split('').reverse().join('');
        }

        candidates.add(candidate);
    }

    candidates.delete(n);  // Убираем само число n

    // Функция для поиска ближайшего палиндрома
    function difference(x) {
        return Math.abs(BigInt(x) - BigInt(n));  // Используем BigInt для работы с большими числами
    }

    let closest = null;
    for (let candidate of candidates) {
        if (closest === null ||
            difference(candidate) < difference(closest) ||
            (difference(candidate) === difference(closest) && BigInt(candidate) < BigInt(closest))) {
            closest = candidate;
        }
    }

    return closest;
}

console.log(closestPalindrome("123"));
console.log(closestPalindrome("1"));
console.log(closestPalindrome("99"));
console.log(closestPalindrome("808"));


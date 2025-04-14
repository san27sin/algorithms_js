// Каким будет вывод этого фрагмента кода?

console.log('start') // 1

setTimeout(() => {
    console.log('setTimeout') // это очередь из макротасков - 4
}) // макротаски - менее приоритетные к ним относятся 1) setTimeout 2) setInterval 3) XHR

Promise.resolve().then(() => {
    console.log('resolve') // это микротаски - 3
}) // микрозадачи имеют выше приоритет setTimout, setInterval, XHR

console.log('end') // 2
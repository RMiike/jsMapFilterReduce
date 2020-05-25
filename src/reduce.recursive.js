const isInitialValueUndefined = (ini) => ini === undefined
const reduce = (arr, func, ini) => {
    const acc = isInitialValueUndefined(ini) ?  arr[0] : ini
    const arrCopy = isInitialValueUndefined(ini) ? arr.slice(1) : arr
    return (function reduceIntern (accIntern, arrIntern, counter) {
        const [head, ...tail] = arrIntern
        return arrIntern.length === 0
        ? accIntern
        : reduceIntern(func(accIntern, head, counter, arrCopy), tail, counter+ 1)
    })(acc, arrCopy, 0)
}
export default reduce

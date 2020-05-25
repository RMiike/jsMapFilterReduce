const reduce = (arr, func, ini) => {
    let acc = ini === undefined ? arr[0] : ini
    const arrCopy = ini === undefined ? arr.slice(1) : arr
    for(let i = 0; i < arrCopy.length; i++){
        acc = func(acc, arrCopy[i])
    }
    return acc
}

export default reduce

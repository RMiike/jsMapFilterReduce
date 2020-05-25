const map = (arr = [], func = (item) => item ) => {

    if(!Array.isArray(arr)){
        throw new TypeError('Primeiro parâmetro deve ser um array')
    }
    let newArr = []
    for( let i = 0; i< arr.length; i++)
    {
        newArr.push(func(arr[i]))
    }
    return newArr
}

export default map

const filter = (arr,func) => {
  let array = []
  for(let i = 0; i< arr.length; i++){
    if(func(arr[i])){
      array.push(arr[i])
    }
  }
  return array
}
export default filter

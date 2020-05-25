const map = (arr = [], func = (item) => item)=>{

  return(function mapInternal(arrInternal){
    const[head,...tail] = arrInternal
    return arrInternal.length === 0 ? [] : [func(head),
            ...mapInternal(tail)]
  })(arr)
}
export default map

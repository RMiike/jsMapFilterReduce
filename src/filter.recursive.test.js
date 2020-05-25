import filter  from './filter.recursive'
import {expect} from 'chai'

it('filter deve ser uma função', ()=>{
   expect(filter).to.be.a('function')
})

it('filter([1,2,3], (item) => item) deve retornar [1,2,3]', ()=>{
  const arr = [1,2,3]
  const result = [1,2,3]
  expect(filter(arr, (item)=> item)).to.be.deep.equal(result)
})

it('filter([1,2,3,10], (item) => item < 5) deve retornar [1,2,3]', ()=>{
  const arr = [1,2,3,10]
  const result = [1,2,3]
  expect(filter(arr, (item)=> item < 5)).to.be.deep.equal(result)
})

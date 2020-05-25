import map from './map.recursive'
import {expect} from 'chai'

it('map deve ser uma função', ()=>{
   expect(map).to.be.a('function')
})

it('map([1,2,3], (item)=> item) deve retornar [1,2,3]', ()=>{
  expect(map([1,2,3],(item)=>item)).to.be.deep.equal([1,2,3])
})

it('map([3,4], item => item) deve retornar [3,4]', () =>{
  expect(map([3,4], (item) => item)).to.be.deep.equal([3,4])
})

it('map[1,2], item = > item+1) deve retornar [2,3]', () => {
  expect(map([1,2], (item) => item+1)).to.be.deep.equal([2,3])
})

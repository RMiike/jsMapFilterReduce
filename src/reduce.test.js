import { expect } from 'chai'
import reduce from './reduce'

it('reduce deve ser uma função', ()=> {
    expect(reduce).to.be.a('function')
})

it('reduce([1,2,3], (acc, item) => { acc + item}, ) deve  returnar 6 ', () => {
  const before = reduce([1,2,3], (acc, item) => acc + item, 0 )
  const after = 6
  expect(before).to.be.deep.equal(after)
})

it('reduce([2,3,4], (acc, item) => { acc + item}, 0 ) deve  returnar 9 ', () => {
  const before = reduce([2,3,4], (acc, item) => acc + item, 0 )
  const after = 9
  expect(before).to.be.deep.equal(after)
})


it('reduce([2,3,4], (acc, item) => { acc + item} )deve  returnar9 ', () => {
  const before = reduce([2,3,4], (acc, item) => acc + item)
  const after = 9
  expect(before).to.be.deep.equal(after)
})

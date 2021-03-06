import { expect } from '../test_helper.js'
import commentReducer from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducer', ()=>{

    it('handles action with unknown type', () =>{
      //  expect(commentReducer()).to.be.instanceof(Array)
        expect(commentReducer(undefined,{})).to.eql([])  //eql : deep comparision
    })

    it('SAVE_COMMENT', () =>{
        const action = { type: SAVE_COMMENT, payload: 'new comment'};
        expect(commentReducer([],action)).to.eql(['new comment'])
    })

})




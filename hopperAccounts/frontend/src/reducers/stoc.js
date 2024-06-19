import { GET_STOC, DElETE_STOC} from "../actions/types"


const initialState = {
    stoc: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_STOC:
      return {
        ...state,
        stoc: action.payload
    };
    case DElETE_STOC:
      return{
        ... state,
        stoc: state.stoc.filter(stoc => stoc.id !==action.payload)
      }
    default:
      return state;
  }  
}
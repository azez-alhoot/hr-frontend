import { SAVE_ADMIN_STATE, SAVE_CANDIDATE_REGISTRATION } from './types/types';

const MainReducer = (state, action)=> {
    // console.log('red', action);
  switch (action.type) {
      case SAVE_CANDIDATE_REGISTRATION:
          return {
              ...state,
              [action.payload.id]: action.payload.value
          }
          
  
          case SAVE_ADMIN_STATE:
          return {
              ...state,
              [action.payload.id]: action.payload.value
          }
            
    
      default:
          return state
  }
}
export default MainReducer
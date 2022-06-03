import { SAVE_ADMIN_STATE, SAVE_CANDIDATE_REGISTRATION } from './types/types';

const MainReducer = (state, action)=> {
  switch (action.type) {
      case SAVE_CANDIDATE_REGISTRATION:
          return {
              ...state
          }
          
  
          case SAVE_ADMIN_STATE:
          return {
              ...state
          }
            
    
      default:
          return state
  }
}
export default MainReducer
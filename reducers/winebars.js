import { FETCH_WINEBARS_FROM_SERVER } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_WINEBARS_FROM_SERVER: return action.winebars;
        default: return state;
            
    }
}
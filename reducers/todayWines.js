import { FETCH_TODAY_WINES_FROM_SERVER, POP_ONE_CARD_FROM_TODAY_WINES } from '../actions';


export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TODAY_WINES_FROM_SERVER: return action.todayWines;
        case POP_ONE_CARD_FROM_TODAY_WINES: return state.slice(0, -1);
        default: return state;
    }
}
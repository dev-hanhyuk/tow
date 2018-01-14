import { FETCH_WINEBAR_DETAIL_FROM_SERVER } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_WINEBAR_DETAIL_FROM_SERVER: return action.winebarDetail;
        default: return state;
    }
}
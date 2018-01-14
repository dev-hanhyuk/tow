import { FETCH_WINE_DETAIL_FROM_SERVER } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_WINE_DETAIL_FROM_SERVER: return action.wineDetail;
        default: return state;
    }
}
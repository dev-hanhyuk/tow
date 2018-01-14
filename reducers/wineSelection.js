import { FETCH_WINESELECTION_FROM_SERVER } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_WINESELECTION_FROM_SERVER: return action.wineSelection;
        default: return state;
    }
}
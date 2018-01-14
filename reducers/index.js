import { combineReducers } from 'redux';
import winebars from './winebars';
import winebarDetail from './winebarDetail';
import wineSelection from './wineSelection';

const rootReducer = combineReducers({
    winebars,
    winebarDetail,
    wineSelection
});

export default rootReducer;

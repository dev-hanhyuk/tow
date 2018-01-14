import { combineReducers } from 'redux';
import winebars from './winebars';
import winebarDetail from './winebarDetail';
import wineSelection from './wineSelection';
import wineDetail from './wineDetail';
import todayWines from './todayWines';

const rootReducer = combineReducers({
    winebars,
    winebarDetail,
    wineSelection,
    wineDetail,
    todayWines
});

export default rootReducer;

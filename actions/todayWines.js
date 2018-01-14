import axios from 'axios';
import { FETCH_TODAY_WINES_FROM_SERVER, POP_ONE_CARD_FROM_TODAY_WINES } from './index';

export const fetchTodayWinesFromServer = () => dispatch => {
    axios.get('http://192.168.219.106:8080/api/todaywines/')
        .then(response => {
            const todayWines = response.data;
            for (var i=0; i<todayWines.length; i++) {
                todayWines[i].key = i+1;
            };
            dispatch({ type: FETCH_TODAY_WINES_FROM_SERVER, todayWines })
        })
        .catch(err => console.error(err.stack))
}


export const popOneCardFromTodayWines = () => dispatch => dispatch({ type: POP_ONE_CARD_FROM_TODAY_WINES });

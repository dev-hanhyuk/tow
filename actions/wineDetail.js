import axios from 'axios';
import { FETCH_WINE_DETAIL_FROM_SERVER } from './index';

export const fetchWineDetailFromServer = (wine_id) => dispatch => {
    axios.get('http://192.168.219.106:8080/api/wines/' + wine_id)
        .then(response => {
            const wineDetail = response.data;
            dispatch({ type: FETCH_WINE_DETAIL_FROM_SERVER, wineDetail })        
        })
        .catch(err => console.error(err.stack))
}
    
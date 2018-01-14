import axios from 'axios';
import { FETCH_WINEBAR_DETAIL_FROM_SERVER } from './index';

export const fetchWinebarDetailFromServer = (winebar_id) => dispatch => {
    axios.get('http://192.168.219.106:8080/api/winebars/' + winebar_id)
        .then(response => {
            const winebarDetail = response.data;
            dispatch({ type: FETCH_WINEBAR_DETAIL_FROM_SERVER, winebarDetail })        
        })
        .catch(err => console.error(err.stack))

    
  }
    
    
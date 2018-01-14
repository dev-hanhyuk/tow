import axios from 'axios';
import { FETCH_WINESELECTION_FROM_SERVER } from './index';

export const fetchWineSelectionFromServer = (winebar_id) => dispatch => {
    axios.get(`http://192.168.219.106:8080/api/winebars/${winebar_id}/selection`)
        .then(response => {
            const wineSelection = response.data;
            dispatch({ type: FETCH_WINESELECTION_FROM_SERVER, wineSelection })
        })
        .catch(err => console.error(err.stack))

    
  }
    
import axios from 'axios';
import { FETCH_WINEBARS_FROM_SERVER } from './index';

export const fetchWinebarsFromServer = () => dispatch => {
  axios.get('http://192.168.219.106:8080/api/winebars')
    .then(response => {
      const winebars = response.data;
      dispatch({ type: FETCH_WINEBARS_FROM_SERVER, winebars })
    })
    .catch(err => console.error(err.stack));
}
  
  
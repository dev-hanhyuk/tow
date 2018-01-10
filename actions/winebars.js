import axios from 'axios';
import { FETCH_WINEBARS_FROM_SERVER } from './index';


export const fetchWinebarsFromServer = () => dispatch =>
  axios.get('/api/winebars')
    .then(response => {
      const winebars = response.data;
      dispatch({ type: FETCH_WINEBARS_FROM_SERVER, winebars })
    })
    .catch(err => console.error(err.stack));


    
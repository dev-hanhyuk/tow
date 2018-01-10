import axios from 'axios';
import { FETCH_WINEBARS_FROM_SERVER } from './index';

// export const fetchWinebarsFromServer = () => dispatch =>
//   axios.get('/api/winebars')
//     .then(response => {
//       const winebars = response.data;
//       dispatch({ type: FETCH_WINEBARS_FROM_SERVER, winebars })
//     })
//     .catch(err => console.error(err.stack));

export const fetchWinebarsFromServer = () => dispatch => {
  const winebars = [
    { id: 1, name: 'winebar_1', location: '3km'},
    { id: 2, name: 'winebar_2', location: '3km'},
    { id: 3, name: 'winebar_3', location: '3km'},
    { id: 4, name: 'winebar_4', location: '3km'},
    { id: 5, name: 'winebar_5', location: '3km'},
  ];
  dispatch({ type: FETCH_WINEBARS_FROM_SERVER, winebars })
}
  
  
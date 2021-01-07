import { FETCH_USER_DATA } from './constants';
import data from '../../Features/ToDoList/Screens/userData.json'
export const fetchUser = () => (dispatch:any) => {
    const products = data;
     dispatch({
        type: FETCH_USER_DATA,
        payload: products
    })
}

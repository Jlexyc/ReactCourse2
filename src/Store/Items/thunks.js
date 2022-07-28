import { 
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
} from './actions'

import { getTotalReports } from '../../Services/covidApiProvider';

export const fetchItems = (date) => {
  return async (dispatch, getState) => {
    dispatch(fetchItemsRequest());
    try {
      console.log('date to fetch: ', date)
      const response = await getTotalReports(date);
      dispatch(fetchItemsSuccess(response.data));
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  }
}
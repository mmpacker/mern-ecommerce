import axios from 'axios'
import { 
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, 
  PRODUCT_LIST_FAIL 
} from '../constants/productConstants'

export const listProducts = () => async (disbatch) => {
  try {
    disbatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/products')

    disbatch({ 
      type: PRODUCT_LIST_SUCCESS,
      payload: data 
    })
  } catch (error) {
    disbatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
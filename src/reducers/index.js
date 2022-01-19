import { combineReducers, createStore  } from 'redux';
import movieReducer from './movieReducer';
import favReducer from './favoriteReducer';


export default combineReducers({
    movie: movieReducer,
    fav: favReducer
});

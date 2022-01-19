import { TOGGLE_FAVORITES } from "../actions/favoritesActions"
import { ADD_FAVORITE } from "../actions/favoritesActions"
import { REMOVE_FAVORITE } from "../actions/favoritesActions"

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                state
                // favorites: state.favorites.filter(item=>(action.payload !== `${item.id}`))
            }    
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }    
        default:
            return state
    }
}

export default favReducer
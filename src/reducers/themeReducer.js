import {LOAD_THEME_INFO,LOGOUT_USER_INFO} from '../actions/theme/actions-type';

const initialState = {
    allTheme:[]
}

const ThemeReducer = (state = initialState, action)=>{
    switch(action.type) {
        case LOAD_THEME_INFO:
            return {allTheme : action.payload}    
        break;
    }
    return state;
}

export default ThemeReducer;
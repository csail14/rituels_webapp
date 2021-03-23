import {LOAD_THEME_INFO} from './actions-type';

export const loadThemeInfo = (theme)=>{
    return function(dispatch) {
        dispatch({
            
            type: LOAD_THEME_INFO,
            payload: theme
        })
    }
}


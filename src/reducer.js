export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing...
    // token: 'BQBT4WfRfHlWNn7H4hLaUJq0vMEWEcOWFJT'+
    // 'xwtgE4JckNg1w11vXL7i3SV6g6RP0wWbj9liFbX-'+
    // 'jMxuGD1paX1rcFeOx21xl498xAhmChZiIXneiuI4OPf'+
    // '_cJQn9j4kz5E-VqIpF1gHE4Natr0xc72gGCz_wBPbTn'+
    // '-lxqqY2Xy9CSOpheGA5',
    // token: 'BQDsXVXhS4VJt0NTiRKS0czH0dyzBd66yJBJTuud7X08Tdn3oBD0cd1J4W-'+
    // '3pOAXl21sRfx1myMankO84QyD_uArMjqk3_'+
    // '4TAJNoqzDUP3KIHg54VwShkd4m28ubfKXTYtWn7rz8ZFsEU0f3rj'+
    // '_0L8NzNjw2PIndWZSsyHIZqvAHcGrJLabL',
}

const reducer = (state, action) => {
    console.log('REDUCER ACTION ' + action)
    console.log('REDUCER ACTION TYPE ' + action.type)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }


}

export default reducer

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
}

const reducer = (state, action) => {
    console.log('REDUCER ACTION' + action)

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
        default:
            return state;
    }


}

export default reducer

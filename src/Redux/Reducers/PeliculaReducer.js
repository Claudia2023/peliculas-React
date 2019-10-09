import Tipo from "../Actions/Tipo";

const InitialState = {
    data: []
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case Tipo.GET_PELICULA_FULFILLED:
            const { data } = action.payload;
            return Object.assign({}, state, {
                data
            });
        default:
            return state;
    };
}
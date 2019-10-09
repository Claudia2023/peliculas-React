import Tipo from "../Actions/Tipo";

const InitialState = {
    data: []
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case Tipo.GET_BUSQUEDA_FULFILLED:
            const { results } = action.payload.data;
            return Object.assign({}, state, {
                data: results
            });
        case Tipo.CLEAR_BUSQUEDA:
            return Object.assign({}, state, {
                data: []
            });
        default:
            return state;
    };
}
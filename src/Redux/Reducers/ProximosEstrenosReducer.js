import Tipo from "../Actions/Tipo";

const InitialState = {
    data: []
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case Tipo.GET_PROXIMOS_ESTRENOS_FULFILLED:
            const { results } = action.payload.data;
            return Object.assign({}, state, {
                data: results
            });
        default:
            return state;
    };
}
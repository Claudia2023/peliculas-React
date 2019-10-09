import Tipo from "../Actions/Tipo";

const InitialState = {
    data: []
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case Tipo.GET_ESTRENOS_FULFILLED:
            const { results } = action.payload.data;
            let peliculaDestacada = results[Math.floor(Math.random() * results.length)];
            return Object.assign({}, state, {
                data: results,
                peliculaDestacada
            });
        default:
            return state;
    };
}
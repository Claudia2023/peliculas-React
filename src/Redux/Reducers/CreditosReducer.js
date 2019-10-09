import Tipo from "../Actions/Tipo";

const InitialState = {
    data: []
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case Tipo.GET_CREDITOS_FULFILLED:
            const { cast } = action.payload.data;
            return Object.assign({}, state, {
                data: cast
            });
        default:
            return state;
    };
}
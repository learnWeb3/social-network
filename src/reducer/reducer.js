const initialState = {
    posts: [],
    current_user: {},
    jwt: "",
    loading: false,
    messages: {
        type: "success",
        messages: [
            {
                message: "hello world"
            }
        ]
    }
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "SET_CURRENT_USER":

            // DEBUG
            //console.log(action.payload)

            if (action.payload) {
                newState.messages = {
                    type: "success",
                    messages: [
                        { message: "Connexion reussie" }
                    ]
                }
                newState.current_user = action.payload.user
                newState.jwt = action.payload.jwt
            }

            return newState;

        case "PAGE_IS_LOADING":

            // DEBUG
            //console.log(action.payload);

            if (action.payload) {

                newState.loading = action.payload.loading;

            }

            return newState;

        case "SET_ALERT_MESSAGE":

            // DEBUG
            //console.log(newState)

            if (action.payload) {

                newState.messages = { messages: action.payload.messages, type: action.payload.type };

            }

            return newState

        case "LOAD_POSTS":

            //console.log(action.payload);

            if (action.payload) {
                newState.posts = action.payload;
            }

            return newState

        case "LOAD_MORE_POSTS":

        console.log(action.payload)
            if (action.payload) {
                newState.posts = [...newState.posts,...action.payload]
            }

            return newState;

        default:
            return state;
    }
}

export default reducer;
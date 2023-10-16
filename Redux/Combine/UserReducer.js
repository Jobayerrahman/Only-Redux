const { Adduser  } = require("./ActionIndentifires");

//Initial States User
const initialUserState = {
    user : [ "jobayer Rahman"]
}

// User reducer
const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case Adduser:
            return {
                user : [...state.user, action.payload],
            }
        default:
            return state;
    }
}

module.exports = userReducer;
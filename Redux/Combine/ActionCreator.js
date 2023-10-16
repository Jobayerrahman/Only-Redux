const { Increment, Decrement, Adduser  } = require("./ActionIndentifires");

//Action Creators ( Actions )
const incrementCount = () =>{
    return {
        type: Increment,
    };
}

const decrementCount = () =>{
    return {
        type : Decrement,
    }
}

const addUser = (user) =>{                                                  // Value passed
    return {
        type : Adduser,
        payload: user,
    }
}

module.exports = {
    incrementCount,
    decrementCount,
    addUser
}

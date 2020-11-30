const INITIALSTATE={
    data:[
        {
            name:"mohsin",
            email:"email"
        },

    ],
}
export default (state=INITIALSTATE,action)=>{
    // console.log("action===>" ,action.type)
    switch(action.type){
    case "SETUSER":
        return({
            ...state,
            current_user:action.payload,

        })
    case "SETFIREBASEUSERS":
    return({
        ...state,
        users:action.payload

    })
    }
    return state
}
const initialState = {
    designs:[
        {id: 1, name:"Project One", tshirtColor: "black"},
        {id: 2, name:"Project Two", tshirtColor: "red"},

    ]
}
const designReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SAVE_DESIGN' :
            console.log(action.design)
    }
    
    return state
}

export default designReducer
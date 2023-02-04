const initialState = {
    totalPrice:272500,
    products: [
        {
            "image":"https://adminapi.applegadgetsbd.com/storage/media/large/2323-92738.jpg",
            "name":"MacBook Air M1 8/256GB 13-inch",
            "price":102500,
            "brand":"apple",
            "specs":"8/256GB 13-inch"
        },
        {
            "image":"https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Max-9907.jpg",
            "name":"iPhone 13 Pro Max - Official",
            "price":170000,
            "brand":"apple",
            "specs":"Official(128GB)"
        }
    ],
    users:[],
};
const productReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_USER_DETAILS":
            return{
                ...state,
                users : [...state.users, action.payload]
            };
        default:
            return state;    
    }
}

export default productReducer;
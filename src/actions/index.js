export const ADD_FEATURES = "ADD_FEATURES";

export const REMOVE_FEATURES = "REMOVE_FEATURES";


export const addFeatures = (id) => {
    return ({type:ADD_FEATURES, payload: id});
}
export const removeFeatures = (id) => {
    return ({type:REMOVE_FEATURES, payload: id});
}





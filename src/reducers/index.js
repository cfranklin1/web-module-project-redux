import {ADD_FEATURES, REMOVE_FEATURES} from "../actions";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_FEATURES):
        const addFeature = state.additionalFeatures.find(
            (feature) => feature.id === action.payload
        )

        return({
            ...state,

            car: {
                ...state.car,
                features: [...state.car.features, addFeature]
            },

            additionalFeatures: state.additionalFeatures.filter(
                (feature) => feature.id !== action.payload
            ),

            additionalPrice: state.additionalPrice + addFeature.price
        });

        case(REMOVE_FEATURES):
            const removedFeature = state.car.features.find(
                (feature) => feature.id === action.payload
            );
            return {
                ...state,
                
                additionalPrice: state.additionalPrice - removedFeature.price,
                additionalFeatures: [...state.additionalFeatures, removedFeature]

            }


        default:
            return state;
    }
};



export default reducer;
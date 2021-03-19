import {ADD_V6_ENGINE, RACING_DETAIL_PACKAGE, PREMIUM_SOUND_SYSTEM, ADD_REAR_SPOILER} from "../actions";

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

        case (ADD_V6_ENGINE):
            return({
                ...state,
                additionalPrice: state.additionalFeatures[0].price,
              
            });
        
        case (RACING_DETAIL_PACKAGE):
            return({
                ...state,
                additionalPrice: state.additionalFeatures[1].price,
                
            });
        
        case (PREMIUM_SOUND_SYSTEM):
            return({
                ...state,
                additionalPrice: state.additionalFeatures[2].price,
                
            });

        case (ADD_REAR_SPOILER):
            return({
                ...state,
                additionalPrice: state.additionalFeatures[3].price,
                
            });


            default:
                return state;
    }
};



export default reducer;
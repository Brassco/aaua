import {
    ADD_CARD,
    ORDER_CARD,
    ADD_CARD_SUCCESS,
    ADD_CARD_FAIL,
    ORDER_CARD_SUCCESS,
    ORDER_CARD_FAIL,
    PHONE_CHANGE,
    CITY_CHANGE,
    COUNTRY_CHANGE,
    DELIVERY_CHANGE,
    ADDRESS_CHANGE,
    COMMENT_CHANGE,
    DELETE_AAUA_CARD,
    CARD_NUMBER_CHANGE,
    MY_AAUA_CARD,
    MY_AAUA_CARD_FAIL,
    MY_AAUA_CARD_LOADED,
    NP_CITY_CHANGE,
    ORDER_CARD_CITY_CHANGE,
    AAUA_ORDERING_CHANGE_PHONE,
    ORDER_AAUA_CARD_SUCCESS,
    ORDER_AAUA_CARD_FAIL,
    AAUA_CARD_NUMBER_CHANGE,
    CHANGE_NP_SKLAD,
    DELIVERY_CURIER,
    DELIVERY_NP,
    NP_CITIES_CLEAN,
    ORDER_CARD_CITY_SELECTED,
    ORDER_CARD_SELECT_ADDRESS
} from '../Actions/types';
import {Actions} from 'react-native-router-flux';

const INITIAL_STATE = {
    myCards: null,
    error: '',
    addCardError: null,
    loading: false,
    orderCardSuccess: false,
    orderVirtualCardSuccess: false,
    card_number: '',
    showCities: 'flex',
    showNPCities: 'none',
    showNPSklads: 'none',
    showAdress: 'flex',
    npCity: null,
    NPskald: null,
    NPskalds: [],
    city: null,
    cityId: null,
    delivery: DELIVERY_CURIER,
    country: 'Украина',
    sklad: null,
    address: null,
    comment: null,
    phone: null
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AAUA_ORDERING_CHANGE_PHONE:
            return {...state, phone: action.payload, addCardError: null};
        case COUNTRY_CHANGE:
            return {...state, country: action.payload, addCardError: null};
        case CITY_CHANGE:
            return {...state, city: action.payload, addCardError: null};
        case DELIVERY_CHANGE:
            return {...state,
                orderCardSuccess: false,
                orderVirtualCardSuccess: false,
                city: null,
                delivery: action.payload,
                address: null,
                addCardError: null}
        case NP_CITY_CHANGE:
            return {
                ...state,
                orderCardSuccess: false,
                orderVirtualCardSuccess: false,
                showCities: 'none',
                showNPCities: 'flex',
                showNPSklads: 'flex',
                showAdress: 'none',
                address: null,
                npCity: action.payload, addCardError: null
            }
        case ORDER_CARD_CITY_SELECTED:
console.log(ORDER_CARD_CITY_SELECTED);
            return {
                ...state,
                npCities: [],
                city: action.payload,
                orderCardSuccess: false,
                orderVirtualCardSuccess: false,
                address: null,
                addCardError: null
            }
        case ORDER_CARD_CITY_CHANGE:
            return {
                ...state,
                city: action.payload,
                orderCardSuccess: false,
                orderVirtualCardSuccess: false,
                address: null,
                // showCities: 'flex',
                // showNPCities: 'none',
                // showNPSklads: 'none',
                // showAdress: 'flex',
                addCardError: null
            }
        case ORDER_CARD_SELECT_ADDRESS:
        case ADDRESS_CHANGE:
            return {...state,
                address: action.payload,
                orderCardSuccess: false,
                orderVirtualCardSuccess: false,
                addCardError: null};
        case NP_CITIES_CLEAN:
            return {
                ...state,
                npCities: null,
                orderCardSuccess: false,
                orderVirtualCardSuccess: false,
                address: null,
                addCardError: null
            }
        case CHANGE_NP_SKLAD:
            return {...state, address: action.payload, orderCardSuccess: false, orderVirtualCardSuccess: false, addCardError: null};
        case COMMENT_CHANGE:
            return {...state, comment: action.payload, orderCardSuccess: false, orderVirtualCardSuccess: false, addCardError: null};
        case ADD_CARD:
            return {...state, orderCardSuccess: false, orderVirtualCardSuccess: false, addCardError: null};
        case ADD_CARD_SUCCESS:
            return {...state, addCardError: null};
        case ADD_CARD_FAIL:
            return {...state, addCardError: action.payload, orderCardSuccess: false, orderVirtualCardSuccess: false};
        case ORDER_CARD:
            return {...state, loading: true, orderCardSuccess: false, orderVirtualCardSuccess: false, addCardError: null};
        case ORDER_AAUA_CARD_SUCCESS:
            return {...state,
                orderCardSuccess: action.payload == 'virtual' ? false : true,
                orderVirtualCardSuccess: action.payload == 'virtual' ? true : false,
                addCardError: null,
                loading: false};
        case ORDER_AAUA_CARD_FAIL:
            return {...state, error: 'Ошибка', orderCardSuccess: false, orderVirtualCardSuccess: false, addCardError: null};
        case DELETE_AAUA_CARD:
            Actions.AAUA_main();
            return {...state, myCards: [], orderCardSuccess: false, orderVirtualCardSuccess: false, addCardError: null};
        case CARD_NUMBER_CHANGE:
            return {...state, card_number: action.payload, addCardError: null};
        case MY_AAUA_CARD:
            return {...state, loading: true, orderCardSuccess: false, orderVirtualCardSuccess: false, addCardError: null}
        case MY_AAUA_CARD_FAIL:
            return {...state, error: action.payload, addCardError: null,orderVirtualCardSuccess: false,  orderCardSuccess: false}
        case MY_AAUA_CARD_LOADED:
            return {...state,
                myCards: action.payload,
                loading: false,
                addCardError: null,
                orderVirtualCardSuccess: false,
                orderCardSuccess: false}
        case AAUA_CARD_NUMBER_CHANGE:
            return {...state, card_number: action.payload, addCardError: null}
        default: return state;
    }
}
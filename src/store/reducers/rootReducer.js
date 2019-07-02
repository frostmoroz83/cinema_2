import authReducer from './authReducer'
import filmsReducer from './filmsReducer'
import { combineReducers} from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import ticketsReducer from "./ticketsReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    film: filmsReducer,
    tickets: ticketsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});


export default rootReducer
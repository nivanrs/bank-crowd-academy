import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userAccountReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { GetCourseReducer } from './reducers/courseReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userAccount: userAccountReducer,
  userRegister: userRegisterReducer,
  courseData: GetCourseReducer,
});

const userInfoFromStorage = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const accountInfoFromStorage = localStorage.getItem('account') ? localStorage.getItem('account') : null;

const initialState = {
  userLogin: { token: userInfoFromStorage },
  userAccount: { account: accountInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
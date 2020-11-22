import {
    USER_COURSE_GET_FAIL,
    USER_COURSE_GET_REQUEST,
    USER_COURSE_GET_SUCCESS,
    USER_COURSE_POST_FAIL,
    USER_COURSE_POST_REQUEST,
    USER_COURSE_POST_SUCCESS,
    USER_COURSE_STATUS_RESET,
} from "../constants/courseConstants";

export const GetCourseReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case USER_COURSE_GET_REQUEST:
            return { loading: true, courses: [] };
        case USER_COURSE_GET_SUCCESS:
            return { loading: false, success:true, courses: action.payload.courses };
        case USER_COURSE_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
  
export const PostCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_COURSE_POST_REQUEST:
            return { loading: true };
        case USER_COURSE_POST_SUCCESS:
            return { loading: false, course: action.payload };
        case USER_COURSE_POST_FAIL:
            return { loading: false, error: action.payload };
        case USER_COURSE_STATUS_RESET:
            return { loading: false, status: null };
        default:
            return state;
    }
};
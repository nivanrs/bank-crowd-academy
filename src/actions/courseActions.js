import axios from "axios";
import {
    USER_COURSE_GET_REQUEST,
    USER_COURSE_GET_SUCCESS,
    USER_COURSE_GET_FAIL,
    USER_COURSE_POST_REQUEST,
    USER_COURSE_POST_SUCCESS,
    USER_COURSE_POST_FAIL,
} from "../constants/courseConstants";
import { logout } from './userActions';

export const GetCourse = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_COURSE_GET_REQUEST,
        })

        const { 
            userLogin: { token },
        } = getState()

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${token}`,
            },
        };
        const { data } = await axios.get("http://3.82.93.151:9000/api/course/", config);

        dispatch({
            type: USER_COURSE_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: USER_COURSE_GET_FAIL,
            payload: message,
        })
    }
}

export const AddCourse = ( NamaKursus, IDTopik, PencapaianKursus, FiturKursus, DeskripsiKursus) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_COURSE_POST_REQUEST,
        })

        const { 
            userLogin: { token },
        } = getState()

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization : `${token}`,
            },
        };

        const { data: {data} } = await axios.post("http://3.82.93.151:9000/api/course/add", {
            NamaKursus: NamaKursus,
            IDTopik: IDTopik,
            PencapaianKursus: PencapaianKursus,
            FiturKursus: FiturKursus,
            DeskripsiKursus: DeskripsiKursus
        }, config);

        dispatch({
            type: USER_COURSE_POST_SUCCESS,
            payload: data.status,
        })

    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: USER_COURSE_POST_FAIL,
            payload: message,
        })
    }
}
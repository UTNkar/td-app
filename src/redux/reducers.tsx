/**
    Reducers are an abstraction from Redux. When dispatching something to the global state (store, in redux language)
    reducers recieve an action type and take a decision based on what it contains. This reducer is passed to redux
    to tell it how to change parts of the store.

    It is idiomatic to name the reducers after the property they handle. This example reducer sets the homestring of the state.
*/

import { MERGE_NEWS, TOGGLE_NEWS_READ, SET_USER_CLASS, SET_USER_SECTION, SET_USER_CLASS_PEOPLE, SET_USER_TOKEN, ADD_NEWS, SET_NEWS_READ, Action } from './actionTypes';
import { defaultState } from './state';
import { combineReducers } from 'redux';
import { State, News, UserClassPeople } from '../types'

const userClass = (state: string = defaultState.userClass, action: Action<string>): string => {
    if (action.type === SET_USER_CLASS)
        return action.payload;

    return state;
}

const userSection = (state: string = defaultState.userSection, action: Action<string>): String => {
    if (action.type === SET_USER_SECTION)
        return action.payload;

    return state;
}

const userClassPeople = (state: UserClassPeople = defaultState.userClassPeople, action: Action<UserClassPeople>): UserClassPeople => {
    if (action.type === SET_USER_CLASS_PEOPLE)
        return action.payload;

    return state;
}

const userToken = (state: string = defaultState.userToken, action: Action<string>): string => {
    switch (action.type) {
        case SET_USER_TOKEN:
            return action.payload
        default:
            return state;
    }
}

const news = (state: Array<News> = defaultState.news, action: Action<News[]> | Action<News> | Action<void> ): Array<News> => {
    switch (action.type) {
        case SET_NEWS_READ:
            return state.map((news: News) => ({...news, read: true}));
        case ADD_NEWS:
            return [action.payload, ...state];
        case MERGE_NEWS:
            return [...action.payload, ...state];
        default:
            return state;
    }
}

const appReducer = combineReducers({ userClass, userSection, userClassPeople, userToken, news });
export default appReducer;

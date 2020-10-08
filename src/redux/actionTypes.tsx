/**
Action types is  an abstraction from Redux. When  dispatching a change
to the global state (store  in redux language), reducers expect action
type objects. These are constructed here.
*/

import { News } from '../types';
import { getClassPeople } from '../classInfoGetters';

/** Valid actions are strings, but set as variables for reuse. */
export const SET_USER_CLASS = "SET_USER_CLASS";
export const SET_USER_SECTION = "SET_USER_SECTION";
export const SET_USER_CLASS_PEOPLE = "SET_USER_CLASS_PEOPLE";
export const SET_USER_TOKEN = "SET_USER_TOKEN";

export const TOGGLE_NEWS_READ = "TOGGLE_NEWS_READ";
export const SET_NEWS = "SET_NEWS";
export const SET_NEWS_READ = "SET_NEWS_READ";
export const ADD_NEWS = "ADD_NEWS"
export const MERGE_NEWS = "MERGE_NEWS";

export type ActionType =
    typeof ADD_NEWS |
    typeof SET_NEWS_READ |
    typeof SET_USER_CLASS |
    typeof SET_USER_SECTION |
    typeof SET_USER_CLASS_PEOPLE |
    typeof SET_USER_TOKEN |
    typeof MERGE_NEWS
    null;

export interface Action<T> {
    // The Action interface represents valid action types.
    type: ActionType;
    payload: T;
}

type ActionEmmiter<T> = (payload: T) => Action<T>;

export const userClassAction: ActionEmmiter<string> = str => {
    return { type: SET_USER_CLASS, payload: str };
}

export const userSectionAction: ActionEmmiter<string> = str => {
    return { type: SET_USER_SECTION, payload: str};
}

export const userTokenAction: ActionEmmiter<string> = str => {
    return { type: SET_USER_TOKEN, payload: str };
}

export const toggleNewsReadAction: ActionEmmiter<void> = () => {
    return { type: SET_NEWS_READ, payload: null };
}

export const addNewsAction: ActionEmmiter<News> = news => {
    return { type: ADD_NEWS, payload: news };
}

export const mergeNewsAction: ActionEmmiter<News[]> = news => {
    return { type: MERGE_NEWS, payload: news };
}

export const setUserClassPeople: ActionEmmiter<string> = className => {
    const userClassPeople = getClassPeople(className);
    return { type: SET_USER_CLASS_PEOPLE, payload: userClassPeople};
}

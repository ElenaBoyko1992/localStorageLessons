import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {CounterActionsType, counterReduser} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReduser
})

//хуки
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunkMiddleware));

//запись данных в localStorage
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

//types
// определить автоматически тип всего state
export type AppRootStateType = ReturnType<typeof rootReducer>
// типизация store
type AppStoreType = typeof store
// создаем тип диспатча который принимает как AC так и TC
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AppActionsType>
//все типы экшенов для всего app
export type AppActionsType = CounterActionsType

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

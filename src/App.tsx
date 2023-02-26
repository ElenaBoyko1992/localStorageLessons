import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./bll/store";
import {incValueAC, setValuesFromLSAC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const dispatch = useAppDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
        //setValue(value + 1)
    }

    // const [value, setValue] = useState<number>(0)
    //
    // useEffect(() => {
    //
    //     let valueAsAString = localStorage.getItem('counterValue')
    //     if (valueAsAString) {
    //         let newValue = JSON.parse(valueAsAString)
    //         setValue(newValue)
    //
    //     }
    // }, []) //коллбэк сработает единожды (при перезагрузке страницы)
    //
    // useEffect(() => {
    //
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // }, [value]) //коллбэк сработает каждый раз после изменения value


    /*        const setToLocalStorageHandler = () => {
                localStorage.setItem('counterValue', JSON.stringify(value))
            }

            const getFromLocalHandler = () => {
                let newValue = localStorage.getItem('counterValue')
                if (newValue) setValue(JSON.parse(newValue))
            }

            const clearLocalStorageHandler = () => {
                localStorage.clear()
                setValue(0)
            }

            const removeItemFromLocalStorageHandler = () => {
                localStorage.removeItem('counterValue')
            }*/

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*                        <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>*/}
        </div>
    );
}

export default App;

//test comment
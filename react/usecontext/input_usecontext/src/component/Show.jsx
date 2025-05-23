import React from 'react'
import { useContext } from 'react'
import context from '../component/Context'


const Show = () => {
    const color = useContext(context)
    return (
        <>
            <context.Provider value={color}>
                <h1>Hello my name is :{color}</h1>
            </context.Provider>
        </>

    )
}

export default Show
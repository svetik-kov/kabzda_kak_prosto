import {memo, useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    console.log('SimpleExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        //api.getUsers().then('') //запрос на сервер
        //setInterval             //установка интервалов
        //indexedDB               // работа с базой данных локальной
        //document.getElementId   // обращение на прямую к дом документам
        //document.title='User'   // изменение заголовка документа
    }, [])

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render (ComponentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change(ComponentDidUpdate) ')
        document.title = counter.toString()
    }, [counter])

    return <>
        hello,{counter}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>

    </>
}

export const SetTimeOutExample= () => {
    console.log('SetTimeOutExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)


   /*    useEffect(() => {
           setTimeout(() => {
               document.title = counter.toString()
           }, 1000)
       },[counter])*/

/*    useEffect(() => {
        setInterval(() => {
            setCounter((state)=>state+1)
        }, 1000)
    },[])*/

    return <>
        hello,counter:{counter} - fake:{fake}

       {/* hello,{counter}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>*/}

    </>
}
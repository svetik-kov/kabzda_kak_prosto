import {memo, useCallback, useMemo, useState} from 'react';

export default {
    title: 'React.memo demo'
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'Css', 'Html'])

    /* const addBook = () => {
         setBooks([...books, 'Angular' + new Date().getTime()])
     }*/

    const memoizedAddBook = useMemo(() => {
        return () => {
            setBooks([...books, 'Angular' + new Date().getTime()])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, 'Angular' + new Date().getTime()])
    }, [books])


    /*  const newArray = useMemo(() => {
          return books.filter(u => u.toLowerCase().indexOf('a') !== -1)
      }, [books])
      */
    return <>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>

        <div>
            <Books addBook={memoizedAddBook2}/>
        </div>
    </>
}

type BooksSecretPropsType = {
    //books: Array<string>,
    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {

    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {/*   {props.books.map((book, i) => <div key={i}> {book}</div>)}*/}
    </div>
}
const Books = memo(BooksSecret)
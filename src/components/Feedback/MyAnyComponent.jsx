import { useDispatch, useSelector } from 'react-redux';

function MyAnyComponent () {

    const dispatch = useDispatch();
    const likes = useSelector(state => state.likes);

    return <div>MyAnyComponent: {likes} 
        <button onClick={() => {dispatch({ type: 'INCREMENT_LIKES', payload: 5 })}}>Click me</button>
    </div>
}

export default MyAnyComponent;
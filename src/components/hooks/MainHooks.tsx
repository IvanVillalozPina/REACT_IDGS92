import react from 'react';
import Contador from './Contador';
import ContadorConCustomHook from './ContadorConCustomHook';

const MainHooks = () => {
    return (
        <>
            <h1>MainHooks</h1>
            <hr />
            <Contador/>
            <ContadorConCustomHook/>
        </>
    )
}

export default MainHooks
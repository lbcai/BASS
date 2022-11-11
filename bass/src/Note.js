import { useState } from 'react';

function Note({ name }) {

    const [state, setState] = useState(' ');

    const click = () => {
        setState(name);
        setTimeout(() => {
            setState(' ')
         }, 3500);
    }

    return (
        <div onClick={click}><span>{state}</span></div>
    );
}

export default Note;

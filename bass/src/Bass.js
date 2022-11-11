import neck from './images/neck.svg';
import './Bass.css';
import Note from './Note';
import useSound from 'use-sound';

import e1 from './notes/e1.mp3';
import a1 from './notes/a1.mp3';
import d2 from './notes/d2.mp3';
import g2 from './notes/g2.mp3';

import f1 from './notes/f1.mp3';
import as1 from './notes/as1.mp3';
import ds2 from './notes/ds2.mp3';
import gs2 from './notes/gs2.mp3';

import fs1 from './notes/fs1.mp3';
import b1 from './notes/b1.mp3';
import e2 from './notes/e2.mp3';
import a2 from './notes/a2.mp3';

import g1 from './notes/g1.mp3';
import c2 from './notes/c2.mp3';
import f2 from './notes/f2.mp3';
import as2 from './notes/as2.mp3';

import gs1 from './notes/gs1.mp3';
import cs2 from './notes/cs2.mp3';
import fs2 from './notes/fs2.mp3';
import b2 from './notes/b2.mp3';

import c3 from './notes/c3.mp3';
import cs3 from './notes/cs3.mp3';

function Bass() {
    const [e1_note] = useSound(e1);
    const [a1_note] = useSound(a1);
    const [d2_note] = useSound(d2);
    const [g2_note] = useSound(g2);

    const [f1_note] = useSound(f1);
    const [as1_note] = useSound(as1);
    const [ds2_note] = useSound(ds2);
    const [gs2_note] = useSound(gs2);

    const [fs1_note] = useSound(fs1);
    const [b1_note] = useSound(b1);
    const [e2_note] = useSound(e2);
    const [a2_note] = useSound(a2);

    const [g1_note] = useSound(g1);
    const [c2_note] = useSound(c2);
    const [f2_note] = useSound(f2);
    const [as2_note] = useSound(as2);

    const [gs1_note] = useSound(gs1);
    const [cs2_note] = useSound(cs2);
    const [fs2_note] = useSound(fs2);
    const [b2_note] = useSound(b2);

    const [c3_note] = useSound(c3);
    const [cs3_note] = useSound(cs3);

    return (
        <div id='main'>
            {/* Open */}
            <div className={"note note-1"} style={{ top: "65%", left: "0.3%" }} onClick={e1_note}><Note className='test' name={'E1'}/></div>
            <div className={'note note-1'} style={{ top: "50%", left: "0.3%" }} onClick={a1_note}><Note name={'A1'}/></div>
            <div className={'note note-1'} style={{ top: "35%", left: "0.3%" }} onClick={d2_note}><Note name={'D2'}/></div>
            <div className={'note note-1'} style={{ top: "20%", left: "0.3%" }} onClick={g2_note}><Note name={'G2'}/></div>
            {/* 1 */}
            <div className={'note note-2'} style={{ top: "65%", left: "3.2%" }} onClick={f1_note}><Note name={'F1'}/></div>
            <div className={'note note-2'} style={{ top: "50%", left: "3.2%" }} onClick={as1_note}><Note name={'A#1'}/></div>
            <div className={'note note-2'} style={{ top: "35%", left: "3.2%" }} onClick={ds2_note}><Note name={'D#2'}/></div>
            <div className={'note note-2'} style={{ top: "20%", left: "3.2%" }} onClick={gs2_note}><Note name={'G#2'}/></div>
            {/* 2 */}
            <div className={'note note-3'} style={{ top: "65%", left: "10%" }} onClick={fs1_note}><Note name={'F#1'}/></div>
            <div className={'note note-3'} style={{ top: "49%", left: "10%" }} onClick={b1_note}><Note name={'B1'}/></div>
            <div className={'note note-3'} style={{ top: "33%", left: "10%" }} onClick={e2_note}><Note name={'E2'}/></div>
            <div className={'note note-3'} style={{ top: "18%", left: "10%" }} onClick={a2_note}><Note name={'A2'}/></div>
            {/* 3 */}
            <div className={'note note-4'} style={{ top: "66%", left: "16.3%" }} onClick={g1_note}><Note name={'G1'}/></div>
            <div className={'note note-4'} style={{ top: "49%", left: "16.3%" }} onClick={c2_note}><Note name={'C2'}/></div>
            <div className={'note note-4'} style={{ top: "33%", left: "16.3%" }} onClick={f2_note}><Note name={'F2'}/></div>
            <div className={'note note-4'} style={{ top: "18%", left: "16.3%" }} onClick={as2_note}><Note name={'A#2'}/></div>
            {/* 4 */}
            <div className={'note note-5'} style={{ top: "66%", left: "22.3%" }} onClick={gs1_note}><Note name={'G#1'}/></div>
            <div className={'note note-5'} style={{ top: "49%", left: "22.3%" }} onClick={cs2_note}><Note name={'C#2'}/></div>
            <div className={'note note-5'} style={{ top: "32%", left: "22.3%" }} onClick={fs2_note}><Note name={'F#2'}/></div>
            <div className={'note note-5'} style={{ top: "17%", left: "22.3%" }} onClick={b2_note}><Note name={'B2'}/></div>
            {/* 5 */}
            <div className={'note note-6'} style={{ top: "67%", left: "28.1%" }} onClick={a1_note}><Note name={'A1'}/></div>
            <div className={'note note-6'} style={{ top: "49%", left: "28.1%" }} onClick={d2_note}><Note name={'D2'}/></div>
            <div className={'note note-6'} style={{ top: "31%", left: "28.1%" }} onClick={g2_note}><Note name={'G2'}/></div>
            <div className={'note note-6'} style={{ top: "15%", left: "28.1%" }} onClick={c3_note}><Note name={'C3'}/></div>
            {/* 6 */}
            <div className={'note note-7'} style={{ top: "68%", left: "33.6%" }} onClick={as1_note}><Note name={'A#1'}/></div>
            <div className={'note note-7'} style={{ top: "49%", left: "33.6%" }} onClick={ds2_note}><Note name={'D#2'}/></div>
            <div className={'note note-7'} style={{ top: "31%", left: "33.6%" }} onClick={gs2_note}><Note name={'G#2'}/></div>
            <div className={'note note-7'} style={{ top: "14%", left: "33.6%" }} onClick={cs3_note}><Note name={'C#3'}/></div>

            <img id='bass-neck' src={neck} alt='Bass neck'></img>
        </div>
    );
}

export default Bass;

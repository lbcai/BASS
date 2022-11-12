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
import d3 from './notes/d3.mp3';
import ds3 from './notes/ds3.mp3';
import e3 from './notes/e3.mp3';
import f3 from './notes/f3.mp3';
import fs3 from './notes/fs3.mp3';
import g3 from './notes/g3.mp3';
import gs3 from './notes/gs3.mp3';
import a3 from './notes/a3.mp3';
import as3 from './notes/as3.mp3';
import b3 from './notes/b3.mp3';
import c4 from './notes/c4.mp3';
import cs4 from './notes/cs4.mp3';
import d4 from './notes/d4.mp3';
import ds4 from './notes/ds4.mp3';
import e4 from './notes/e4.mp3';
import f4 from './notes/f4.mp3';
import fs4 from './notes/fs4.mp3';
import g4 from './notes/g4.mp3';

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
    const [d3_note] = useSound(d3);
    const [ds3_note] = useSound(ds3);
    const [e3_note] = useSound(e3);
    const [f3_note] = useSound(f3);
    const [fs3_note] = useSound(fs3);
    const [g3_note] = useSound(g3);
    const [gs3_note] = useSound(gs3);
    const [a3_note] = useSound(a3);
    const [as3_note] = useSound(as3);
    const [b3_note] = useSound(b3);
    const [c4_note] = useSound(c4);
    const [cs4_note] = useSound(cs4);
    const [d4_note] = useSound(d4);
    const [ds4_note] = useSound(ds4);
    const [e4_note] = useSound(e4);
    const [f4_note] = useSound(f4);
    const [fs4_note] = useSound(fs4);
    const [g4_note] = useSound(g4);

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
            <div className={'note note-4'} style={{ top: "17%", left: "16.3%" }} onClick={as2_note}><Note name={'A#2'}/></div>
            {/* 4 */}
            <div className={'note note-5'} style={{ top: "66%", left: "22.3%" }} onClick={gs1_note}><Note name={'G#1'}/></div>
            <div className={'note note-5'} style={{ top: "49%", left: "22.3%" }} onClick={cs2_note}><Note name={'C#2'}/></div>
            <div className={'note note-5'} style={{ top: "32%", left: "22.3%" }} onClick={fs2_note}><Note name={'F#2'}/></div>
            <div className={'note note-5'} style={{ top: "16%", left: "22.3%" }} onClick={b2_note}><Note name={'B2'}/></div>
            {/* 5 */}
            <div className={'note note-6'} style={{ top: "67%", left: "28.1%" }} onClick={a1_note}><Note name={'A1'}/></div>
            <div className={'note note-6'} style={{ top: "49%", left: "28.1%" }} onClick={d2_note}><Note name={'D2'}/></div>
            <div className={'note note-6'} style={{ top: "31%", left: "28.1%" }} onClick={g2_note}><Note name={'G2'}/></div>
            <div className={'note note-6'} style={{ top: "14%", left: "28.1%" }} onClick={c3_note}><Note name={'C3'}/></div>
            {/* 6 */}
            <div className={'note note-7'} style={{ top: "68%", left: "33.6%" }} onClick={as1_note}><Note name={'A#1'}/></div>
            <div className={'note note-7'} style={{ top: "49%", left: "33.6%" }} onClick={ds2_note}><Note name={'D#2'}/></div>
            <div className={'note note-7'} style={{ top: "31%", left: "33.6%" }} onClick={gs2_note}><Note name={'G#2'}/></div>
            <div className={'note note-7'} style={{ top: "13%", left: "33.6%" }} onClick={cs3_note}><Note name={'C#3'}/></div>
            {/* 7 */}
            <div className={'note note-8'} style={{ top: "68%", left: "38.8%" }} onClick={b1_note}><Note name={'B1'}/></div>
            <div className={'note note-8'} style={{ top: "49%", left: "38.8%" }} onClick={e2_note}><Note name={'E2'}/></div>
            <div className={'note note-8'} style={{ top: "30%", left: "38.8%" }} onClick={a2_note}><Note name={'A2'}/></div>
            <div className={'note note-8'} style={{ top: "12%", left: "38.8%" }} onClick={d3_note}><Note name={'D3'}/></div>
            {/* 8 */}
            <div className={'note note-9'} style={{ top: "68%", left: "43.7%" }} onClick={c2_note}><Note name={'C2'}/></div>
            <div className={'note note-9'} style={{ top: "49%", left: "43.7%" }} onClick={f2_note}><Note name={'F2'}/></div>
            <div className={'note note-9'} style={{ top: "30%", left: "43.7%" }} onClick={as2_note}><Note name={'A#2'}/></div>
            <div className={'note note-9'} style={{ top: "11%", left: "43.7%" }} onClick={ds3_note}><Note name={'D#3'}/></div>
            {/* 9 */}
            <div className={'note note-10'} style={{ top: "70%", left: "48.4%" }} onClick={cs2_note}><Note name={'C#2'}/></div>
            <div className={'note note-10'} style={{ top: "49%", left: "48.4%" }} onClick={fs2_note}><Note name={'F#2'}/></div>
            <div className={'note note-10'} style={{ top: "29%", left: "48.4%" }} onClick={b2_note}><Note name={'B2'}/></div>
            <div className={'note note-10'} style={{ top: "10%", left: "48.4%" }} onClick={e3_note}><Note name={'E3'}/></div>
            {/* 10 */}
            <div className={'note note-11'} style={{ top: "70%", left: "53%" }} onClick={d2_note}><Note name={'D2'}/></div>
            <div className={'note note-11'} style={{ top: "49%", left: "53%" }} onClick={g2_note}><Note name={'G2'}/></div>
            <div className={'note note-11'} style={{ top: "29%", left: "53%" }} onClick={c3_note}><Note name={'C3'}/></div>
            <div className={'note note-11'} style={{ top: "9%", left: "53%" }} onClick={f3_note}><Note name={'F3'}/></div>
            {/* 11 */}
            <div className={'note note-12'} style={{ top: "71%", left: "57.3%" }} onClick={ds2_note}><Note name={'D#2'}/></div>
            <div className={'note note-12'} style={{ top: "49%", left: "57.3%" }} onClick={gs2_note}><Note name={'G#2'}/></div>
            <div className={'note note-12'} style={{ top: "28%", left: "57.3%" }} onClick={cs3_note}><Note name={'C#3'}/></div>
            <div className={'note note-12'} style={{ top: "8%", left: "57.3%" }} onClick={fs3_note}><Note name={'F#3'}/></div>
            {/* 12 */}
            <div className={'note note-13'} style={{ top: "71%", left: "61.4%" }} onClick={e2_note}><Note name={'E2'}/></div>
            <div className={'note note-13'} style={{ top: "49%", left: "61.4%" }} onClick={a2_note}><Note name={'A2'}/></div>
            <div className={'note note-13'} style={{ top: "28%", left: "61.4%" }} onClick={d3_note}><Note name={'D3'}/></div>
            <div className={'note note-13'} style={{ top: "8%", left: "61.4%" }} onClick={g3_note}><Note name={'G3'}/></div>
            {/* 13 */}
            <div className={'note note-14'} style={{ top: "71%", left: "65.3%" }} onClick={f2_note}><Note name={'F2'}/></div>
            <div className={'note note-14'} style={{ top: "49%", left: "65.3%" }} onClick={as2_note}><Note name={'A#2'}/></div>
            <div className={'note note-14'} style={{ top: "27%", left: "65.3%" }} onClick={ds3_note}><Note name={'D#3'}/></div>
            <div className={'note note-14'} style={{ top: "6%", left: "65.3%" }} onClick={gs3_note}><Note name={'G#3'}/></div>
            {/* 14 */}
            <div className={'note note-14'} style={{ top: "71%", left: "68.8%" }} onClick={fs2_note}><Note name={'F#2'}/></div>
            <div className={'note note-14'} style={{ top: "49%", left: "68.8%" }} onClick={b2_note}><Note name={'B2'}/></div>
            <div className={'note note-14'} style={{ top: "27%", left: "68.8%" }} onClick={e3_note}><Note name={'E3'}/></div>
            <div className={'note note-14'} style={{ top: "6%", left: "68.8%" }} onClick={a3_note}><Note name={'A3'}/></div>
            {/* 15 */}
            <div className={'note note-15'} style={{ top: "71%", left: "72.3%" }} onClick={g2_note}><Note name={'G2'}/></div>
            <div className={'note note-15'} style={{ top: "48%", left: "72.3%" }} onClick={c3_note}><Note name={'C3'}/></div>
            <div className={'note note-15'} style={{ top: "26%", left: "72.3%" }} onClick={f3_note}><Note name={'F3'}/></div>
            <div className={'note note-15'} style={{ top: "4%", left: "72.3%" }} onClick={as3_note}><Note name={'A#3'}/></div>
            {/* 16 */}
            <div className={'note note-15'} style={{ top: "72%", left: "75.4%" }} onClick={gs2_note}><Note name={'G#2'}/></div>
            <div className={'note note-15'} style={{ top: "48%", left: "75.4%" }} onClick={cs3_note}><Note name={'C#3'}/></div>
            <div className={'note note-15'} style={{ top: "26%", left: "75.4%" }} onClick={fs3_note}><Note name={'F#3'}/></div>
            <div className={'note note-15'} style={{ top: "3%", left: "75.4%" }} onClick={b3_note}><Note name={'B3'}/></div>
            {/* 17 */}
            <div className={'note note-16'} style={{ top: "73%", left: "78.5%" }} onClick={a2_note}><Note name={'A2'}/></div>
            <div className={'note note-16'} style={{ top: "48%", left: "78.5%" }} onClick={d3_note}><Note name={'D3'}/></div>
            <div className={'note note-16'} style={{ top: "25%", left: "78.5%" }} onClick={g3_note}><Note name={'G3'}/></div>
            <div className={'note note-16'} style={{ top: "2%", left: "78.5%" }} onClick={c4_note}><Note name={'C4'}/></div>
            {/* 18 */}
            <div className={'note note-17'} style={{ top: "73%", left: "81.4%" }} onClick={as2_note}><Note name={'A#2'}/></div>
            <div className={'note note-17'} style={{ top: "48%", left: "81.4%" }} onClick={ds3_note}><Note name={'D#3'}/></div>
            <div className={'note note-17'} style={{ top: "25%", left: "81.4%" }} onClick={gs3_note}><Note name={'G#3'}/></div>
            <div className={'note note-17'} style={{ top: "2%", left: "81.4%" }} onClick={cs4_note}><Note name={'C#4'}/></div>
            {/* 19 */}
            <div className={'note note-18'} style={{ top: "73%", left: "84.2%" }} onClick={b2_note}><Note name={'B2'}/></div>
            <div className={'note note-18'} style={{ top: "48%", left: "84.2%" }} onClick={e3_note}><Note name={'E3'}/></div>
            <div className={'note note-18'} style={{ top: "25%", left: "84.2%" }} onClick={a3_note}><Note name={'A3'}/></div>
            <div className={'note note-18'} style={{ top: "1%", left: "84.2%" }} onClick={d4_note}><Note name={'D4'}/></div>
            {/* 20 */}
            <div className={'note note-19'} style={{ top: "73%", left: "86.8%" }} onClick={c3_note}><Note name={'C3'}/></div>
            <div className={'note note-19'} style={{ top: "48%", left: "86.8%" }} onClick={f3_note}><Note name={'F3'}/></div>
            <div className={'note note-19'} style={{ top: "25%", left: "86.8%" }} onClick={as3_note}><Note name={'A#3'}/></div>
            <div className={'note note-19'} style={{ top: "1%", left: "86.8%" }} onClick={ds4_note}><Note name={'D#4'}/></div>
            {/* 21 */}
            <div className={'note note-20'} style={{ top: "73%", left: "89.3%" }} onClick={cs3_note}><Note name={'C#3'}/></div>
            <div className={'note note-20'} style={{ top: "48%", left: "89.3%" }} onClick={fs3_note}><Note name={'F#3'}/></div>
            <div className={'note note-20'} style={{ top: "24%", left: "89.3%" }} onClick={b3_note}><Note name={'B3'}/></div>
            <div className={'note note-20'} style={{ top: "0%", left: "89.3%" }} onClick={e4_note}><Note name={'E4'}/></div>
            {/* 22 */}
            <div className={'note note-21'} style={{ top: "73%", left: "91.7%" }} onClick={d3_note}><Note name={'D3'}/></div>
            <div className={'note note-21'} style={{ top: "48%", left: "91.7%" }} onClick={g3_note}><Note name={'G3'}/></div>
            <div className={'note note-21'} style={{ top: "24%", left: "91.7%" }} onClick={c4_note}><Note name={'C4'}/></div>
            <div className={'note note-21'} style={{ top: "0%", left: "91.7%" }} onClick={f4_note}><Note name={'F4'}/></div>
            {/* 23 */}
            <div className={'note note-21'} style={{ top: "73%", left: "93.9%" }} onClick={ds3_note}><Note name={'D#3'}/></div>
            <div className={'note note-21'} style={{ top: "48%", left: "93.9%" }} onClick={gs3_note}><Note name={'G#3'}/></div>
            <div className={'note note-21'} style={{ top: "24%", left: "93.9%" }} onClick={cs4_note}><Note name={'C#4'}/></div>
            <div className={'note note-21'} style={{ top: "0%", left: "93.9%" }} onClick={fs4_note}><Note name={'F#4'}/></div>
            {/* 24 */}
            <div className={'note note-21'} style={{ top: "74%", left: "96%" }} onClick={e3_note}><Note name={'E3'}/></div>
            <div className={'note note-21'} style={{ top: "48%", left: "96%" }} onClick={a3_note}><Note name={'A3'}/></div>
            <div className={'note note-21'} style={{ top: "24%", left: "96%" }} onClick={d4_note}><Note name={'D4'}/></div>
            <div className={'note note-21'} style={{ top: "0%", left: "96%" }} onClick={g4_note}><Note name={'G4'}/></div>

            <img id='bass-neck' src={neck} alt='Bass neck'></img>
        </div>
    );
}

export default Bass;

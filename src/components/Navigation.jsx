import { useState } from 'react';
import './../style/Navigation.css';
import Achat from './Achat';
import Forme from './Forme';
import Stock from './Stock';

const Navigation = () =>{
    const [selectionState, setSelectionState] = useState('selection');
    const [selectionAdd, setSelectionAdd] = useState('');
    const [selectionBay, setSelectionBay] = useState('');
    const [element, setElement] = useState(<Stock/>);
    const arraySet = [setElement, [setSelectionState,setSelectionAdd]];
    
    const selected = (e)=>{
        e.preventDefault();
        const id = e.target.getAttribute('id');
        if(id === 'state'){
            setSelectionState('selection');
            setSelectionAdd('');
            setSelectionBay('');
            setElement(<Stock/>)
        }else if(id === 'add'){
            setSelectionState('');
            setSelectionAdd('selection');
            setSelectionBay('');
            setElement(<Forme setLink={arraySet} />)
        }else{
            setSelectionState('');
            setSelectionAdd('');
            setSelectionBay('selection');
            setElement(<Achat />)
        }
    }

    return (
        <div>
            <div className="Navigation">
                <ul>
                        <li><div onClick={selected} id='state' className={selectionState}>etat de stock</div></li>
                        <li><div onClick={selected} id='add' className={selectionAdd}>Ajouter un produit</div></li>
                        <li><div onClick={selected} id='bay' className={selectionBay}>Produit en achat</div></li>
                </ul>

                <div className='option'>
                        ← options
                </div>
            </div>

            {element}
        </div>
    );
}

export default Navigation;
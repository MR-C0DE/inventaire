import './../style/Forme.css';
import axios from 'axios'; 
import { useState } from 'react';
import Stock from './Stock';


const Forme = (props) => {

    const [inputName, setInputName] = useState(null);
    const [inputDescription, setInputDescription] = useState(null);
    const [inputType, setInputType] = useState(null);
    const [inputQuantite, setInputQuantite] = useState(0);
    const [inputSeuil, setInputSeuil] = useState(0);


    const nameOnChange = (e) => {
        e.preventDefault();
        setInputName(e.target.value);
    }
    const descriptionOnChange = (e) => {
        e.preventDefault();
        setInputDescription(e.target.value);
    }
    const typeOnChange = (e) => {
        e.preventDefault();
        setInputType(e.target.value);
    }

    const quantiteOnChange = (e) => {
        e.preventDefault();
        setInputQuantite( Number(e.target.value));
    }

    const seuilOnChange = (e) => {
        e.preventDefault();
        setInputSeuil( Number(e.target.value));
    }

    const handleSauvegarder = (e) => {
        // if new post to submit
        e.preventDefault();
         const item =   {
                            nom: inputName,
                            description: inputDescription,
                            sorte: inputType,
                            quantite: inputQuantite,
                            seuil: inputSeuil
                        };
        axios
          .post("http://localhost:8000/api/tasks/", item)
          .then(()=>{
            props.setLink[0](<Stock/>)

            // À MODIFIER
            props.setLink[1][0]('selection');
            props.setLink[1][1]('');
        });
      };
    
    return (
        <div className='Forme'>


            <div className='listeForme'>
                <div>
                    <label htmlFor="name">Nom du produit</label>
                    <p>
                        <input onChange={nameOnChange} type="text" id='name' />
                    </p>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <p>
                        <input onChange={typeOnChange} type="text" id='type' />
                    </p>
                </div>
                <div>
                    <label htmlFor="qte">Quantité actuelle en stock</label>
                    <p>
                        <input onChange={quantiteOnChange} type="text" id='qte' />
                    </p>
                </div>
                <div>
                    <label htmlFor="seuil">Seuil minimum en stock</label>
                    <p>
                        <input onChange={seuilOnChange} type="text" id='seuil' />
                    </p>
                </div>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <p>
                    <textarea onChange={descriptionOnChange} name="description" id="description" cols="30" rows="10"></textarea>
                </p>
            </div>

            <div className='btn'>
                <button onClick={handleSauvegarder} >Sauvegarder</button>
            </div>
            
        </div>
    );
}

export default Forme;
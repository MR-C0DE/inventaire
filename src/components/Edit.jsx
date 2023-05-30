import './../style/Edit.css';
import axios from 'axios'; 
import { useState } from 'react';


const Edit = (props) => {

    const [inputName, setInputName] = useState(props.valeur.nom);
    const [inputDescription, setInputDescription] = useState(props.valeur.description);
    const [inputType, setInputType] = useState(props.valeur.sorte);
    const [inputQuantite, setInputQuantite] = useState(props.valeur.quantite);
    const [inputSeuil, setInputSeuil] = useState(props.valeur.seuil);

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
          .put(`http://localhost:8000/api/tasks/${props.valeur.id}/`, item)
          .then(()=>{
            props.modif((<div></div>));
        });
      };

      console.log(props.modif);
      const handleSupprimer = () => {



        axios
          .delete(`http://localhost:8000/api/tasks/${props.valeur.id}/`)
          .then(()=>{
                props.modif((<div></div>));
          });

      };

      const handleCancel = (e) =>{
        e.preventDefault();
        props.modif((<div></div>));
      }
    
    return (
        <div className='Edit'>


            <div className='listeEdit'>
                <div>
                    <label htmlFor="name">Nom du produit</label>
                    <p>
                        <input value={inputName} onChange={nameOnChange} type="text" id='name' />
                    </p>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <p>
                        <input value={inputType} onChange={typeOnChange} type="text" id='type' />
                    </p>
                </div>
                <div>
                    <label htmlFor="qte">Quantité actuelle en stock</label>
                    <p>
                        <input value={inputQuantite} onChange={quantiteOnChange} type="text" id='qte' />
                    </p>
                </div>
                <div>
                    <label htmlFor="seuil">Seuil minimum en stock</label>
                    <p>
                        <input value={inputSeuil} onChange={seuilOnChange} type="text" id='seuil' />
                    </p>
                </div>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <p>
                    <textarea value={inputDescription}  onChange={descriptionOnChange} name="description" id="description" cols="30" rows="10"></textarea>
                </p>
            </div>

            
            <div className='btn'>
                <div>
                    <button onClick={handleCancel} className='cancel'>Annuler</button>
                </div>

                <div>
                    <button className='del' onClick={handleSupprimer}>Supprimer</button>
                    <button className='save' onClick={handleSauvegarder} >Sauvegarder</button>
                </div>

                
            </div>
            
        </div>
    );
}

export default Edit;
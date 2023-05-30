import './../style/Stock.css';
import './../style/Achat.css';
import recherche from './../images/icon/recherche.png';
import edit from './../images/icon/edit.png';
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import Edit from './Edit';


const Achat = ()=>{
    const [donnee, setDonnee] = useState([]);
    const [modifie, setModifie] = useState((<div></div>));
    
    

    const refreshList = async () => {
        axios   
            .get("http://localhost:8000/api/tasks/")
            .then(res => setDonnee(res.data))
            .catch(err => console.log(err));
    };

    useEffect(()=>{
         refreshList(); // Modifier 
        

    }, [modifie]);

    let resultat = donnee.filter(item => item.quantite < item.seuil);


    return (
        <div className="Stock">

            <div className='recherche'>

                <label htmlFor="search">
                    <img src={recherche} alt="de recherche" />
                </label>

                <input type="text" name="search" id="search" placeholder='Recherche par mot clé' />


            </div>

            <table>
                <thead>
                    <tr>
                        <td>Nom</td>
                        <td>Description</td>
                        <td>Type</td>
                        <td>Quantité actuelle en stock</td>
                        <td>Seuil minimum en stock</td>
                        <td>Modifier</td>
                    </tr>
                </thead>
                
                    <tbody>

                    {resultat.map((element, i) => (
                        <tr id={((element.quantite < element.seuil))?'achat': 'nice'} className={ ((i+1) % 2 === 0)?'pair achatlist':'impair achatlist'} key={"cle" + element.id}>
                            <td>{element.nom}</td>
                            <td>{element.description}</td>
                            <td >{element.sorte}</td>
                            <td className='mark'>{element.quantite}</td>
                            <td className='mark'>{element.seuil}</td>
                            <td>  <img onClick={(e, valeur) => {
                                                    e.preventDefault();
                                                    setModifie(<Edit modif={setModifie} valeur={element}/>)
                                                }} 
                                        src={edit} alt="de edit" /></td>
                        </tr>
                    ))} 
                </tbody>
            </table>

            {modifie}

        </div>
    );
}
export default Achat;
import { useState } from 'react';
import './Galeria.css';
import { useEffect } from 'react';

function Galeria() {


    const [pets] = useState([
        { id: 1, nome: "Tobby", especie: "Cachorro", idade: 4 },
        { id: 2, nome: "Mia", especie: "Gato", idade: 2 },
        { id: 3, nome: "Luna", especie: "Cachorro", idade: 1 },
        { id: 4, nome: "Nino", especie: "Gato", idade: 3 },
        { id: 5, nome: "Bolt", especie: "Cachorro", idade: 5 },
        { id: 6, nome: "Frajola", especie: "Gato", idade: 6 },
        { id: 7, nome: "Pipoca", especie: "Cachorro", idade: 2 },
        { id: 8, nome: "Tom", especie: "Gato", idade: 3 },
        { id: 9, nome: "Mel", especie: "Cachorro", idade: 1 },
        { id: 10, nome: "Bidu", especie: "Cachorro", idade: 7 },
        { id: 11, nome: "Salem", especie: "Gato", idade: 2 },
        { id: 12, nome: "Max", especie: "Cachorro", idade: 3 },
        { id: 13, nome: "Amora", especie: "Gato", idade: 5 },
        { id: 14, nome: "Nina", especie: "Cachorro", idade: 4 },
        { id: 15, nome: "Simba", especie: "Gato", idade: 2 }
    ]);

    useEffect(() => {
        console.log("Página está sendo carregada!");
        return () => {
            console.log("Deixando a pagina de pets!");
        };
    }, []);


    return (
        <section >
            <div className="container-pets">
                <h2>Galeria de pets</h2>
                <p>Total de pets disponíveis: {pets.length}</p>
                <ul className="listas-pets">
                    {pets.map(p => (
                        <li key={p.id} className="itens-pets">
                            <h2>{p.nome}</h2>

                            <div className="detalhes-rolamento">
                                 <p >Espécie: {p.especie} </p>
                                
                            </div>
                            <div className="detalhes-rolamento">
                                 <p >  Idade: {p.especie}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Galeria;
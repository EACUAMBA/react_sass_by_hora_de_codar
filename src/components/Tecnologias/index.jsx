import './index.sass'

import React from 'react';
import {DiJava, DiJavascript, DiReact, SiSpring, SiSpringboot, DiPostgresql} from "react-icons/all";

const tecnologias = [
    {id:'java', name: 'Java', icon: <DiJava/>},
    {id:'javascript', name: 'Java', icon: <DiJava/>},
    {id:'react', name: 'Java', icon: <DiJava/>},
    {id:'spring', name: 'Java', icon: <DiJava/>},
    {id:'springboot', name: 'Java', icon: <DiJava/>},
    {id:'postgresql', name: 'Java', icon: <DiJava/>},
]


const Tecnologias = () => {
    return (
        <section className="tecnologias">
            <h2>Tecnologias</h2>
            <div className="tecnologias_grid">
                {
                    tecnologias.map((item)=>{
                        return (
                            <div className={'tecnologias_card'} id={item.id} key={item.id}>
                                {item.icon}
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa eligendi explicabo hic incidunt invent.
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Tecnologias;

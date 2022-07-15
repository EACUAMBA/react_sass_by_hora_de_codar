import React from 'react';
import './index.sass';
import About from "../About";
import Projectos from "../Projectos";
import Tecnologias from "../Tecnologias";

const MainContent = () => {
    return (
        <main id={'main_content'}>
            <About/>
            <Projectos/>
            <Tecnologias/>
        </main>
    );
};

export default MainContent;

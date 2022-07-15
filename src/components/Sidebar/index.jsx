import React from 'react';
import './index.sass';


const Sidebar = () => {
    return (
        <aside id={'sidebar'}>
            <p>Image</p>
            <p className={'title'}>Desenvolvedor</p>
            <p>Redes sociais</p>
            <p>Informacoes de contacto</p>
            <a href={'#'} className={'btn'}>Downaload de curriculo</a>
        </aside>
    );
};

export default Sidebar;
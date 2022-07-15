import './index.sass';
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/all";

import React from 'react';

const InformationContainer = () => {
    return (
        <div id={'information_container'}>
            <div className={'info_card'}>
                <AiFillPhone id={'phone_icon'}/>
                <div>
                    <h3>Telefone</h3>
                    <p>842473772</p>
                </div>
            </div>
            <div className={'info_card'}>
                <AiOutlineMail id={'mail_icon'}/>
                <div>
                    <h3>Mail</h3>
                    <p>edilsoncuamba@gmail.com</p>
                </div>
            </div>
            <div className={'info_card'}>
                <AiFillEnvironment id={'pin_icon'}/>
                <div>
                    <h3>Localização</h3>
                    <p>São José / SC</p>
                </div>
            </div>
        </div>

    );
};

export default InformationContainer;

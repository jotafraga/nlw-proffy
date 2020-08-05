import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQErMm_303TUfw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=joc5OWXTiKrHjvzF4B1lAm3IIMSrPLUyOkkqpc-pvr8" alt="" />
                <div>
                    <strong>João Vitor Fraga</strong>
                    <span>Fifinha</span>
                </div>
            </header>

            <p>
                A nível organizacional, a valorização de fatores subjetivos agrega valor ao estabelecimento das regras de conduta normativas.
                <br /><br />
                Assim mesmo, a valorização de fatores subjetivos agrega valor ao estabelecimento dos procedimentos normalmente adotados.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
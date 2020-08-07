import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input id="name" label="Nome completo" />
                    <Input id="avatar" label="Avatar" />
                    <Input id="whatsapp" label="WhatsApp" />
                    <TextArea id="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input id="subject" label="Matéria" />
                    <Input id="cost" label="Custo da sua hora por aula" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>

                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;
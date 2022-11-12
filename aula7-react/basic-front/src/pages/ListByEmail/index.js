import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ListUser() {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    async function handleSearch(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        const list = await ClientUsers.listByEmail(data);
        // console.log('update', update);
        if (list.status === 200) {
            toast.success('sucesso!');
            console.log(list);
            const data = list.data.nome;
            setNome(data);
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Buscar usuário">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSearch}>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Buscar</button>

                        <div className='resposta'>
                            <h3>Usuário encontrado: {nome}</h3>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
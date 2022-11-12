import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function List() {

    const [lista, setLista] = useState([]);

    async function handleList() {

        const list = await ClientUsers.listUser();
        if (list.status === 200) {
            toast.success('sucesso!');
            const data = list.data;
            setLista(data);
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar usuários">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <table className='tabelaUsers'>
                        <thead>
                            <th>Nome</th>
                            <th>Email</th>
                        </thead>
                        <tbody>
                            {lista.map((item) => <><tr><td>{item.nome}</td><td>{item.email}</td></tr></>)}
                        </tbody>
                    </table>
                    <button onClick={() => handleList()}>Mostrar</button>
                </div>
            </div>
        </div>
    )
}
const Users = require('../src/application/user_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const UsersRepository = require('../src/port/user_repository');

jest.mock('../src/port/user_repository');

it('CREATE - Criar um carro', async () => {
    const data = {
        carro: "Fusca",
        marca: "Volkswagen",
        ano: '1965'
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ ...data, id });

    const result = await Users.create(data);
    expect(result).toEqual({ ...data, id });
})

it('CREATE - Dado duplicado', async () => {
    const data = {
        carro: "Fusca",
        marca: "Volkswagen",
        ano: '1965'
    }

    UsersRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Users.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})

it('UPDATE - Atualizar o ano do carro Fusca', async () => {
    const data = {
        carro: "Fusca",
        ano: '1966'
    }

    const id = Utils.generateUuid();

    UsersRepository.update.mockResolvedValue({ ...data, id });

    const result = await Users.update(data);
    expect(result).toEqual({ ...data, id });
})

it('DELETE - Deletar carro Brasilia', async () => {
    const data = {
        carro: "Brasilia"
    }

    const id = Utils.generateUuid();

    UsersRepository.delete.mockResolvedValue({ ...data, id });

    const result = await Users.delete(data);
    expect(result).toEqual({ ...data, id });
})

it('GET - Listar carros', async () => {
    const result = await Users.list();
    expect(result).toEqual(undefined);
})

it('PATCH - Listar carros por Marca', async () => {
    const data = {
        marca: "Volkswagen"
    }

    const id = Utils.generateUuid();

    UsersRepository.getByMarca.mockResolvedValue({ ...data, id });

    const result = await Users.listByMarca(data);
    expect(result).toEqual({ ...data, id });
})

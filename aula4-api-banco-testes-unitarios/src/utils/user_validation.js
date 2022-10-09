const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    produtora: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'string'
    },
    ano: { type: 'string' },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    produtora: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: { type: 'string' },
};

const get = {
    produtora: { type: 'string' }
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};
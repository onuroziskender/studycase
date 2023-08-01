const allCategories = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                required: ['id', 'name', 'parentId','deleted'],
                properties: {
                    id: {type: 'string',  format: 'uuid'},
                    name: {type: 'string'},
                    parentId: {type: 'string', format: 'uuid'},
                    deleted: {type: 'boolean'},
                }
            }
        }
    }
}

const addCategory = {
    body: {
        type: 'object',
        required: ['name'],
        properties: {
            name: {type: 'string'},
            deleted: {type: 'boolean'},
        }
    },

    response: {
        201: {
    type: 'object',
            properties: {
            selected: {type: 'boolean'}
            }
        }
    }
}

const updateCategory = {
    body: {
        type: 'object',
        properties: {

        }
    },
    params: {
        type: 'object',
        properties:{
            id: {type: 'string', format:'uuid'},
            parentId: {type: 'string', format: 'uuid'}
        }
    }

}
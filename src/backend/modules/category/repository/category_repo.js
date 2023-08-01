const db = require("/src/backend/helpers/database");

class CategoryRepository {
    async findSubcategories(id) {
        return db.select('*')
            .from('categories')
            .where('id', id)
            .limit(1);
    }

    async create(data) {
        return db.insert({
            name: data.name,
            category: []
        }).into('categories');
    }

    async update(id, data) {
        return db('categories')
            .where('id', id)
            .update({
                name: data.name,
            });
    }

    async delete(id) {
        return db
            .from('categories')
            .where('id', id)
            .delete();
    }


}

module.exports = new CategoryRepository();
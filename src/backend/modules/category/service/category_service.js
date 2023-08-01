const CategoryRepository = require('../repository/category_repo');
const CategoryDto = require('../dto/category_dto');

class CategoryService {

    async findAll(offset = 0, limit = 10, sort = 'desc') {
        return await  CategoryRepository.findAll(offset, limit, sort);
    }

    async findOne(id) {
        return await CategoryRepository.findOne(id);
    }

    async create(data) {
        let categoryDto = new CategoryDto();
        categoryDto.name = data.name;
        categoryDto.subCategories = data.subCategories;

        return await CategoryRepository.create(categoryDto);
    }

    async update(id, data) {
        let categoryDto = new CategoryDto();
        categoryDto.name = data.name;
        categoryDto.address = data.address;

        return await CategoryRepository.update(id, categoryDto);
    }

    async delete(id) {
        return await CategoryRepository.delete(id);
    }

}

module.exports = new CategoryService()
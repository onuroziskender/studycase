class UserDto {
    get categoryName() {
        return this._name;
    }

    set categoryName(newName) {
        this._name = newName;
    }

    get subCategories() {
        return this._subcategories;
    }

    set subCategories(subCategories) {
        this._subcategories = subCategories;
    }
}

module.exports = UserDto;
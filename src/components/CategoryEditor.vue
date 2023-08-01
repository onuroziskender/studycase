<script setup>
import {ref, onMounted, defineProps,defineEmits, reactive} from "vue";
import axios from "axios";

const emit = defineEmits(['onSelectCategory','onDeleteCategory'])
const props = defineProps({
  category_id: { type: String },
  titleName: { type: String },
  updateCurrentCategories: {type: Function}
});
//const parentId = mainCategory.id;

let selectedSubCategory = reactive({});
const subCategories = ref([]);
const selectSubCategory = (item) => {
  console.log("Previous Selected:" + selectedSubCategory.name)
  if (selectedSubCategory) {
    selectedSubCategory.selected = false;

  }
  selectedSubCategory = item;
  selectedSubCategory.selected = true;

  console.log("New Selected:" + selectedSubCategory.name)
  emit('onSelectCategory', selectedSubCategory);
}
onMounted( async () => {
console.log("Props: "+props.category_id)
  await updateSubCategories();
});

const updateSubCategories = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/subCategories/${props.category_id}`,{});
    subCategories.value= response.data;

    console.log(subCategories.value)
    console.log(subCategories.value[0])

  } catch (error) {
    console.log(error);
  }
  filteredItems.value = subCategories.value.filter(category => !category.deleted);
}
const filteredItems = ref([]);

const addCategory = async () => {

    const categoryName = prompt('Enter the new category name:');
    if (categoryName && categoryName.trim() !== '') {
      // const newCategory = {
      //   name: 'New Category',
      //   parent_id: 'category_id',
      // }
     await axios.post(`http://localhost:3000/api/addCategories/${props.category_id}/${categoryName.trim()}`, {} )
     await updateSubCategories();
    }
    else {
      alert("Enter a name!")
    }


};

const editCategory = async () => {
  if (selectedSubCategory) {
    // Get the new name from the user
    const newName = prompt('Enter the new category name:');
    if (newName && newName.trim() !== '') {
      selectedSubCategory.name = newName.trim()

      // const updatedName = {
      //   id: selectedSubCategory.id,
      //   name: newName.trim()
      // }
      await axios.post(`http://localhost:3000/api/updateCategories/${selectedSubCategory.id}/${newName.trim()}`,
          {})
     // selectedSubCategory.value.name = newName.trim();
    }
  }
};

const deleteCategory = async () => {
  if (selectedSubCategory) {
    emit('onDeleteCategory', selectedSubCategory);
    // Soft delete the category by changing the 'deleted' property to true
    await axios.post(`http://localhost:3000/api/deleteCategory/${selectedSubCategory.id}`)
     selectedSubCategory.deleted = true;
     selectedSubCategory.selected = false; // Deselect the deleted category

  }

  await updateSubCategories();

};

</script>

<template>
  <div class="category-editor">
    <div class="button-container btn-group">
      <button class="btn btn-primary btn-sm" @click = 'editCategory'> Edit </button>
      <button class="btn btn-danger btn-sm" @click = 'deleteCategory'> Delete </button>
      <button class="btn btn-success btn-sm" @click = 'addCategory'> Add </button>
    </div>
    <div class="category-title"> {{ titleName }} </div>
    <div class = "category-list">
      <div class="scrollable-list">
        <ul :key="subCategories.length" class="category-items">
          <template v-for="(item,index) in filteredItems">
            <li @click="selectSubCategory(item,index)"  :key="item.id" :class="{ 'selected': item.selected, 'deleted': item.deleted }" v-if="!item.deleted" >
              <div>
                {{ item.name }}
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>

li{
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ccc;
  margin: 5px;
}

li.selected{
  background-color: #007bff;
  color: #fff;
}

.button-container{
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  color: white;
  font-family: Georgia,serif;

}
.category-title{
  text-align: left;
  margin-bottom: 10px;
}
.category-editor {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  overflow: auto;
  background-color: #cccccc;
}
.category-list {
  width: 250px;
  height: 250px;
  border: 1px solid black;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.scrollable-list {
  padding: 10px;
}

.category-items{
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.category-item {
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.category-item:last-child {
  margin-bottom: 0;
}

.scrollable-list {
  padding: 10px;
}

.category-btn{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  width: 150px;
  height: 50px;
}
</style>

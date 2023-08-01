<script setup>
import {reactive, defineProps, defineEmits, onMounted, ref} from 'vue';
import CategoryEditor from './CategoryEditor.vue';
import axios from "axios";

// const props = defineProps({
//   selectedCategory: { type: Array },
// });

 const categories = ref([]);
// const selectItem = async (data, index) => {
//   categories.value.splice(index+1)
//   const { data: responseData } = await axios.get(`http://localhost:3000/api/`)
//
//   if(responseData.length <= 0){
//     categories.value.splice(index+1)
//     return
//   }
//   categories.value.splice(index+1, 1, responseData)
// }

onMounted( async () => {
  // mounting the main category box at start
  const response = await axios.get(`http://localhost:3000/api/categories/992aa796-e763-473a-91b7-16b23aa3b042`)
  categories.value = response.data
  console.log("Main Category: "+ categories[0])
});

const handleSelectCategory = async (selectedCategory,index) => {
  // You can collect the selectedCategory data here and add it to your list
  // For example, you could do something like categories.value.push(selectedCategory)
  if (selectedCategory){
    categories.value.splice(index+1)

    if(categories.length <= 0){
   categories.value.splice(index+1)
    return
 }
    categories.value.splice(index+1, 1, selectedCategory)
  }
  //console.log("index:" + index);
  //console.log("categories: " + categories.value)



  // You can also open a new CategoryEditor box with the selectedCategory's ID and name

  // In this example, we will just update the current categories with the selected category
  //handleUpdateCurrentCategories([selectedCategory]);
};

const handleOnDelete = async (deletedCategory,index) => {
  // You can collect the selectedCategory data here and add it to your list
  // For example, you could do something like categories.value.push(selectedCategory)
  if (deletedCategory) {
    categories.value.splice(index+1)

    if (categories.length <= 0) {
      categories.value.splice(index+1)
      return
    }
    //categories.value.splice(index+1 , 1, deletedCategory)
  }
  console.log("index:" + index);
  console.log("categories: " + categories.value)
};

</script>


<template >
  <div class="category-container">
    <div class="category-list">
      <CategoryEditor
          v-for="(category, index) in categories"
          :key="category.id"
          :category_id="category.id"
          :titleName="category.name"
          @onSelectCategory="(selectedCategory) => handleSelectCategory(selectedCategory, index)"
          @onDeleteCategory="(deletedCategory) => handleOnDelete(deletedCategory, index)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.category-list {
  display: flex;
  flex-direction: row;
}
</style>

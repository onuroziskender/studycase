<script setup>
let auth = false;
const logout = () => {

}

</script>

<template>
<header class="header">
  <div class="top-panel">
    <div class="container-header">
      <div class="header-left">
        <router-link to="/"> <b class="header-text">Category Editor</b> <i class="bi bi-apple"></i> </router-link>
      </div>
      <div class="header-right">
        <div class="user-container">
          <nav>
            <ul class="nav-list">
              <li class="dropdown">
                  <router-link to="/login">
                    <i class="bi bi-person-circle"></i>
                  </router-link>
              </li>
              <li v-if="auth === true">
                <button
                    class="logout-button btn btn-danger "
                    @click="logout"
                >
                 Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>
  <hr class="m-0"/>
</template>

<style lang="scss" scoped>
$bg-color: #202020;
$primary-color: #f23849;

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #1c1c1c;
  font-family: "Georgia", serif;
  font-weight: bold;
}
nav{
  ul{
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li{
      display: inline;
      align-items: center;
      a{
        display: block;
        color: white;
        text-align: center;
        align-items: center;
        text-decoration: none;
        padding: 16px;
      }
      a:hover{
        background-color: #111;
      }
    }
  }
}
.container-header, .top-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.header-left {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: auto;

}
.header-right {
  display: flex;
  justify-content: center;
  margin: auto;
}
.header-text{
  a{
    a:link {
      color: red;
    }
    a:visited {
      color: red
    }
    a:hover {
      color: darkred
    }
    a:active {
      color: black
    }
  }
}
.nav-list {
  display: flex;
  align-items: center;
}
.logout-button{
align-self: center;
  width: auto;
}
li {
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ccc;
  margin: 5px;
}

li.selected {
  background-color: #007bff;
  color: #fff;
}
</style>
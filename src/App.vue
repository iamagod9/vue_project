<template>
  <div class="app">
    <employee-profile/>
    <menu-employee-profile/>
  </div>
</template>

<script>
  import EmployeeProfile from './components/EmployeeProfile.vue'
  import MenuEmployeeProfile from './components/MenuEmployeeProfile.vue';

  export default {
    components: {
      EmployeeProfile,
      MenuEmployeeProfile
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: 100%;
  background-color: #576a90;
}
</style>

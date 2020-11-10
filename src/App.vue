<template>
  <v-app >
    <v-main class = "appCSS">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.appCSS{
  background-color: #E8E9EB;
}
</style>
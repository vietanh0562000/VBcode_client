<template>
  <v-card elevation="50" width="132" height="853" dark class="cardCSS">
    <v-navigation-drawer floating permanent>
      <h1>VB.</h1>
      <v-list dense rounded>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          class="listCSS"
          @click = "$router.push({path: item.path})"
        >
          <v-list-item-title>
            <v-icon x-large>{{ item.icon }}</v-icon>
          </v-list-item-title>
         
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      items: [
        { icon: "mdi-home" ,title:"Home", path: '/home'},
        { icon: "mdi-book-open",title: "Rank", path: '/rank' },
        { icon: "mdi-account",title:"User", path: '/user/1' },
        { icon: "mdi-cog",title:"Setting", path: '/' },
      ],
    };
  },
  methods: {
    
  }
};
</script>
<style scoped>
.cardCSS {
  border-radius: 20px !important;
}

.listCSS {
  margin-bottom: 60px !important;
  margin-left: 20px;
}
h1 {
  text-align: center;
  font-size: 50px;
}
</style>
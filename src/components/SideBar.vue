<template>
  <v-card elevation="50" width="132" height="853" dark class="cardCSS">
    <v-navigation-drawer floating permanent>
      <h1>VB.</h1>
      <v-list dense rounded>
        <v-list-item
          v-for="item in items"
          :key="item.icon"
          link
          class="listCSS"
          @onClick = "goTo(item.path)"
        >
          <v-list-item-icon class="listIconCSS">
            <v-icon x-large>{{ item.icon }}</v-icon>
          </v-list-item-icon>
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
        { icon: "mdi-home" , path: '/home'},
        { icon: "mdi-book-open", path: '/problem' },
        { icon: "mdi-account", path: '/' },
        { icon: "mdi-cog", path: '/' },
      ],
    };
  },
  methods: {
    goTo(link){
      this.$router.push({path: link});
    }  
  }
};
</script>
<style scoped>
.cardCSS {
  border-radius: 20px !important;
}
.listIconCSS {
  margin: auto;
  text-align: center;
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
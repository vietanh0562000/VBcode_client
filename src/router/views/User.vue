<template>
  <v-container class="pa-12" flat>
    <v-row>
      <v-col cols="2">
        <side-bar></side-bar>
      </v-col>
      <v-col cols="10">
        <v-card height="853" class="problemCSS">
          <h1>{{ name }}</h1>
          <h2>{{ totalPoint }}</h2>
          <v-form @submit="save">
            <v-text-field
              v-model="oldPassword"
              type="password"
              outlined
              prepend-inner-icon="mdi-key"
              label="Old Password"
            >
            </v-text-field>
            <v-text-field
              v-model="newPassword"
              type="password"
              outlined
              prepend-inner-icon="mdi-key"
              label="New Password"
            >
            </v-text-field>
            <v-text-field
              v-model="rePassword"
              type="password"
              outlined
              prepend-inner-icon="mdi-key"
              label="Confirm Password"
            >
            </v-text-field>
            <v-btn dark height="50" type="submit"> Save </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SideBar from "../../components/SideBar.vue";
import axios from "axios";
import api from "./api";
export default {
  name: "User",
  components: {
    SideBar,
  },
  data() {
    return {
      name: "VanhDV",
      totalPoint: 0,
      oldPassword: "",
      newPassword: "",
      rePassword: "",
    };
  },
  methods: {
    loadData() {
      axios.get(api.getUserById + this.$route.params.id).then((r) => {
        this.name = r.data.name;
        this.totalPoint = r.data.totalpoint;
        this.password = r.data.password;
      });
    },
    save(){
        console.log(1);
    }
  },
};
</script>
<style scoped>
.problemCSS {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  overflow-y: scroll;
}
h1,
h2 {
  text-align: center;
}
</style>
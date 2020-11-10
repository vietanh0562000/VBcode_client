<template>
  <v-container>
    <v-card height="677" width="718" dark class="cardCSS">
      <v-form @submit.prevent="authenticate">
        <h1 class="titleCSS">VBCODE.</h1>
        <v-text-field
          v-model="username"
          outlined
          prepend-inner-icon="mdi-account"
          label="User name"
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          outlined
          prepend-inner-icon="mdi-key"
          label="Password"
        >
        </v-text-field>
        <v-btn light height="50" type = "submit"> Log in </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import {login} from '../../helpers/auth';
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    authenticate() {
      console.log("log in");
      this.$store.dispatch("LOGIN");
      login(this.$data.form)
        .then(res =>{
          this.$store.commit("LOGIN_SUCCESS", res);
          this.$router.push({path: '/home'});
        })
      
    },
  },
};
</script>
<style scoped>
.cardCSS {
  margin: auto !important;
  padding: 30px;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.titleCSS {
  font-size: 96px;
  text-align: center;
}
</style>
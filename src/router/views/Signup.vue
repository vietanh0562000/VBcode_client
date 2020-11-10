<template>
  <v-container>
    <v-card height="677" width="718" dark class="cardCSS">
      <v-form>
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
        <v-text-field
          v-model="repassword"
          type="password"
          outlined
          prepend-inner-icon="mdi-key"
          label="Re-Password"
        >
        </v-text-field>
        <v-btn light height="50" @click="signup"> Sign up </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      repassword: "",
    };
  },
  methods: {
    signup() {
      console.log("sign up");
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
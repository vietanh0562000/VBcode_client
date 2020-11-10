<template>
  <v-container class="pa-12" flat>
    <v-row>
      <v-col cols="2">
        <side-bar> </side-bar>
      </v-col>
      <v-col cols="10" class="colCSS">
        <v-row>
          <v-col cols="7">
            <v-card height="100" class="welcome">
              <h1>Hi {{ username }}!</h1>
              <p>It's good to see you again.</p>
            </v-card>
          </v-col>
          <v-col cols="2" class="achivement">
            <v-card height="100" class="welcome">
              <h1>{{ solvedProblem }}</h1>
              <p>
                Problems<span><br /></span> completed
              </p>
            </v-card>
          </v-col>
          <v-col cols="2" class="achivement">
            <v-card height="100" class="welcome">
              <h1>{{ joinedContest }}</h1>
              <p>
                Contests<span><br /></span> joined
              </p>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <v-card height="717" class="welcome">
              <h1>Problems</h1>
              <v-data-table
                dense
                :headers="problemHeaders"
                :items="problems"
                item-key="id"
                class="elevation-1"
                @click:row = "solveProblem"
                height="570"
              >
                 
              </v-data-table>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card height="717" class="welcome"> 
              <h1>Contests</h1>
              <v-data-table
                dense
                :headers="contestHeaders"
                :items="constests"
                item-key="id"
                class="elevation-1"
                @click:row = "enterContest"
                height="570"
              >
                 
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "HomeLayout",
  components: {
    SideBar,
  },
  data() {
    return {
      username: "VanhDV",
      solvedProblem: 5,
      joinedContest: 10,
      problemHeaders: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Name",
          value: "title",
        },
        {
          text: "Points",
          value: "points",
        },
      ],
      problems: [
        { id: 1, title: "Find x", points: 100 },
        { id: 2, title: "Find x", points: 100 },
        { id: 3, title: "Find x", points: 100 },
        { id: 4, title: "Find x", points: 100 },
      ],
      contestHeaders: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Name",
          value: "title",
        },
      ],
      constests: [
        { id: 1, title: "Find x"},
        { id: 2, title: "Find x"},
        { id: 3, title: "Find x"},
        { id: 4, title: "Find x"},
      ],
    };
  },
  methods: {
    chooseFile() {
      console.log("choose File");
    },
    solveProblem(){
      this.$router.push({path: '/problem'});
    },
    enterContest(){
      this.$router.push({ path: '/contest'});
    }
  },
};
</script>
<style scoped>
.welcome {
  background-color: white;
  border: 20px;
  padding: 15px;
}
.colCSS {
  padding: 0px;
}
.achivement {
}
.achivement h1 {
  float: left;
  font-size: 64px;
  position: relative;
  top: -15%;
}
.achivement p {
  position: relative;
  top: 15%;
}
</style>
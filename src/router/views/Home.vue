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
              <v-select
                v-model="selectedCategory"
                :items= "categories"
                label="Search By Category"
              >
              </v-select>
              <v-data-table
                dense
                :headers="problemHeaders"
                :items="problems"
                item-key="id"
                class="elevation-1"
                hide-default-footer
                @click:row="solveProblem"
                height="70%"
              >
              </v-data-table>
              <v-pagination
                v-model="pagination.current"
                :length="pagination.total"
                :total-visible="7"
                @input="onPageChange"
              ></v-pagination>
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
                @click:row="enterContest"
                height="50%"
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
import axios from 'axios';
import api from './api';
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
      selectedCategory: null,
      categories:[],
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
      problems: [],
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
      constests: [],
      pagination: {
        current: 1,
        total: 10,
      },
    };
  },
  methods: {
    chooseFile() {
      console.log("choose File");
    },
    solveProblem(value) {
      this.$router.push({ path: "/problem/" + value.id });
    },
    enterContest(value) {
      this.$router.push({ path: "/contest/" + value.id });
    },
    getData(){
      let page = this.pagination.current;
      let category = this.selectedCategory;
      axios.get(api.getAllProblem,{params:{page,category}}).then(res =>{
        // this.problems = res.data.data;
        // this.pagination.current = res.data.current_page;
        // this.pagination.total = res.data.last_page;
        console.log(res);
      });
      // axios.get(api.getAllCategories).then(res =>{
      //   this.categories = res.data;
      // });
    },
    onPageChange(){
      this.getData();
    },
  },
  mounted() {
    this.getData();
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
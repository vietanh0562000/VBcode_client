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
          <v-col cols="4" class="achivement">
            <v-card height="100" class="welcome">
              <h1 class = "totalPoint">{{ totalPoints }}</h1>
              <h3>Points</h3>
            </v-card>
          </v-col>
        
        </v-row>
        <v-row>
          <v-col cols="7">
            <v-card height="717" class="welcome">
              <h1 class = "floatLeft margin10px">Problems</h1>
              <v-select
                v-model="selectedCategory"
                :items= "categories"
                label="Search By Category"
                @input = "getData"
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
              <h1 class = "margin10px">Contests</h1>
              <v-data-table
                dense
                :headers="contestHeaders"
                :items="constests"
                item-key="id"
                class="elevation-1"
                @click:row="enterContest"
                height="70%"
                hide-default-footer
              >
              </v-data-table>
              <v-pagination
                v-model="contestPagi.current"
                :length="contestPagi.total"
                :total-visible="7"
                @input="onPageChange"
              ></v-pagination>
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
      totalPoints: 50,
      selectedCategory: null,
      categories:[
        'All',
      ],
      problemHeaders: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Points",
          value: "point",
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
          value: "name",
        },
      ],
      constests: [],
      pagination: {
        current: 1,
        total: 10,
      },
      contestPagi:{
        current: 1,
        total: 10,
      }
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
      let contestPage = this.contestPagi.current;
      if (category == 'All') category = '';

      axios.get(api.getAllProblem,{params:{page,category}}).then(res =>{
        console.log(res);
        this.problems = res.data.data;
        this.pagination.current = res.data.meta.current_page;
        this.pagination.total = res.data.meta.last_page;
        
      });
      axios.get(api.getAllCategories).then(res =>{
        //console.log(res);
        let categories = res.data.data;
        categories.forEach(element => {
          this.categories.push(element.category);
        });
      });
      axios.get(api.getAllContest, {params: {contestPage}}).then(res =>{
        this.constests = res.data.data;
        this.contestPagi.current = res.data.meta.current_page;
        this.contestPagi.total = res.data.meta.last_page;
        //console.log(res);
      })
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

.achivement h1 {
  float: left;
  font-size: 64px;
  position: relative;
  top: -15%;
}
.achivement h3 {
  position: relative;
  top: 40%;
}
.floatLeft{
  float: left;
}
.margin10px{
  margin: 10px;
}
.margin0px{
  margin: 0px;
}
</style>
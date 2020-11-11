<template>
   <v-container class="pa-12" flat>
    <v-row>
      <v-col cols="2">
        <side-bar> </side-bar>
      </v-col>
      <v-col cols="6">
        
        <v-card height="853" class="problemCSS">
              <h1>{{nameContest}}</h1>
              <v-data-table
                dense
                :headers="problemHeaders"
                :items="problems"
                item-key="id"
                class="elevation-1"
                @click:row = "solveProblem"
                height="800"
              >
                 
              </v-data-table>
            </v-card>
      </v-col>
      <v-col cols="3">
        <v-card height="853" class="problemCSS">
          <v-select v-model="language" :items="languages" outlined>
          </v-select>
          <h1>Submit</h1>
          
          <v-row>
          <v-file-input width="61%" >
          </v-file-input>
          <v-btn dark height="50" width="38%" @click="submit">
              Submit
          </v-btn>
          </v-row>
          
          
        </v-card>
      </v-col>
    </v-row>
  </v-container>     
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import axios from 'axios';
import api from './api';
export default {
  name: "Contest",
  components: {
      SideBar,
  },
  data() {
    return {
      nameContest: "Contest 1",
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
      problems: [
      ],
      language: "C++",
      languages: ["C++", "Java", "Pascal"],
    };
  },
  mounted() {
    this.loadData();
    this.loadDataProblems();
  },
  methods: {
    submit() {
      console.log("choose File");
    },
    solveProblem(value){
      this.$router.push({path: '/problem/' + value.id});
    },
    loadDataProblems(){
      console.log('load data problems');
      axios.get(api.getAllProblem).then(res => res.data).then(r =>{
        console.log(r);
        this.problems = r.data;
      });
      
    },
    loadData(){
      console.log(1);
      axios.get(api.getContestById + this.$route.params.id).then(res => res.data).then(r =>{
        this.nameContest = r.data.name,
        console.log(r);
      });
      
    },
    
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
.problemCSS::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.problemCSS {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
h1 {
  text-align: center;
}
.submitionCSS {
    border: 1px solid black;
    float: left;
    text-align:center;
}
</style>
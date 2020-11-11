<template>
  <v-container class="pa-12" flat>
    <v-row>
      <v-col cols="2">
        <side-bar> </side-bar>
      </v-col>
      <v-col cols="6">
        <v-card height="853" class="problemCSS" >
          <h1>{{ title }}</h1>
          <p>{{ task }}</p>
         
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card height="853" class="problemCSS">
          <h1>Submit</h1>
          <v-row>
          <v-file-input width="61%" v-model="file">
          </v-file-input>
          <v-btn dark height="50" width="38%" @click="submit">
              Submit
          </v-btn>
          </v-row>
          <br>
          <h3>History</h3>
          <v-simple-table>
              <template>
                  <thead>
                      <tr>
                          <th> ID </th>
                          <th> Score </th>
                      </tr>
                      
                  </thead>
                  <tbody>
                      <tr v-for="item in histories" :key= "item.id">
                          <th>{{item.id}}</th>
                          <th>{{item.score}}</th>
                      </tr>
                  </tbody>
              </template>
          </v-simple-table>
          
        </v-card>
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
      title: "Fibonaccii",
      task: '',
       
       submition: 'exp',
       histories:[
           {id: 1, score: 50},
           {id: 0, score: 100},
           {id: -1, score: 80},
       ],
       file:null,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    getParam(){
      return{
        file: this.file,
        
      }
    },
    submit(){
        let formData = new FormData();
        formData.append('file', this.file, this.file.name);
        axios.post(api.submissions, formData).then(res =>{
          console.log('success' + res);
        })
        if (this.file != null){
          this.histories.push({id: this.histories.length+1, score: 100});
          this.file = null;
        }
    },
    loadData(){
      axios.get(api.getProblemById + this.$route.params.id).then(res => res.data).then(r =>{
        console.log(r);
        this.title = r.data.name;
        this.task = r.data.question;
        
      });
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
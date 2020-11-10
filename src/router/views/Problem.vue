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
          <h2>Example</h2>
          <h3>INPUT</h3>
          <p>{{input}}</p>
          <h3>OUTPUT</h3>
          <p>{{output}}</p>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card height="853" class="problemCSS">
          <h1>Submit</h1>
          <v-row>
          <v-card height="50" width="61%" class = "submitionCSS">
              {{submition}}
          </v-card>
          <v-btn dark height="50" width="38%" @click="chooseFile">
              Choose file
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
export default {
  name: "HomeLayout",
  components: {
    SideBar,
  },
  data() {
    return {
      title: "Fibonaccii",
      task: `Numbers 1,2,3,…n (each integer from 1 to n once) are written on a board. In one operation you can erase any two numbers a and b from the board and write one integer a+b2 rounded up instead.

You should perform the given operation n−1 times and make the resulting number that will be left on the board as small as possible.

For example, if n=4, the following course of action is optimal:

choose a=4 and b=2, so the new number is 3, and the whiteboard contains [1,3,3];
choose a=3 and b=3, so the new number is 3, and the whiteboard contains [1,3];
choose a=1 and b=3, so the new number is 2, and the whiteboard contains [2].
It's easy to see that after n−1 operations, there will be left only one number. Your goal is to minimize it.

Input
The first line contains one integer t (1≤t≤1000) — the number of test cases.

The only line of each test case contains one integer n (2≤n≤2⋅105) — the number of integers written on the board initially.

It's guaranteed that the total sum of n over test cases doesn't exceed 2⋅105.

Output
For each test case, in the first line, print the minimum possible number left on the board after n−1 operations. Each of the next n−1 lines should contain two integers — numbers a and b chosen and erased in each operation.`,
       input: `1 4`,
       output: `2
       2 4
       3 3
       3 1
       `,
       submition: 'exp',
       histories:[
           {id: 1, score: 50},
           {id: 0, score: 100},
           {id: -1, score: 80},
       ]
    };
  },
  mounted() {
    this.loadProblem();
  },
  methods: {
    chooseFile(){
        console.log('choose File');
    },
    loadProblem(){
      axios.get();
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
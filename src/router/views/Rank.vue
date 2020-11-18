<template>
  <v-container class="pa-12" flat>
    <v-row>
      <v-col cols="2">
        <side-bar></side-bar>
      </v-col>
      <v-col cols="10">
        <v-data-table
          dense
          :headers="rankHeaders"
          :items="users"
          item-key="id"
          class="elevation-1"
          hide-default-footer
        >
        </v-data-table>
        <v-pagination
          v-model="pagination.current"
          :length="pagination.total"
          :total-visible="7"
          @input="onPageChange"
        >
        </v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Axios from 'axios';
import SideBar from "../../components/SideBar.vue";
import api from './api';
export default {
  name: "Rank",
  components: {
    SideBar,
  },
  data(){
      return{
          rankHeaders:[
              {
                text: "Mã",
                value: "id",
              },
              {
                text: "Tên",
                value: "name",
              },
              {
                text: "Tổng điểm",
                value: "totalPoints"
              }
          ],
          users:[],
          pagination:{
              current: 1,
              total: 10,
          }
      }
  },
  methods:{
      loadData(){
          let page = this.pagination.current;
          Axios.get(api.getRank, {params:{page}}).then(res =>{
              this.users = res.data;
          })
      },
      onPageChange(){
          this.loadData();
      }
  },
  mounted(){
      this.loadData();
  }
};
</script>
<style scoped></style>

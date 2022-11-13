<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-select
          v-model="month"
          :items="total_months"
          label="Month"
          data-test="month-select"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-slider
        data-test="year-slider"
        class="mt-7 ml-8"
          v-model="year"
          min="2000"
          max="2022"
          label="Year"
          thumb-label
        ></v-slider>
      </v-col>
      <v-col cols="4">
        <v-btn
        data-test="btn-submit"
        class="mt-4 ml-8"
          color="secondary"
          elevation="2"
          @click="showWildFireData()"
          x-large>
          Submit
        </v-btn>
        </v-col>
    </v-row>
    <v-row>
    <v-simple-table
    v-if="wildfireData.length > 0"
    fixed-header
    height="500px"
    class="data_table">
      <thead>
        <tr>
          <th class="text-left">
            WildFire Name
          </th>
          <th class="text-left">
            Country
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in wildfireData">
          <td>{{ item.wildfireName }}</td>
          <td>{{ item.country }}</td>
        </tr>
      </tbody>
  </v-simple-table>
  <div v-else>Oh No !</div>
    </v-row>
   </v-container>
</template>

<script>
import Vue from "vue";
import RestClient from "../api/RestClient";
import moment from "moment";

export default Vue.extend({
  name: "Dashboard",
  methods: {
    async showWildFireData() {
      const res = await RestClient.getClosedWildFireDataForMonthAndYear(this.month, this.year);
      this.wildfireData = res.data.data;
    },
  },
  created() {
    this.showWildFireData();
  },

  data(){
  return {
    month: 'Jan',
    year: 2022,
    total_months: moment.monthsShort(),
    wildfireData: [],
  }
},
});
</script>
<style scoped>
.data_table {
  width: 1000px;
}
</style>
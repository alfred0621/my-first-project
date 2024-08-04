<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-btn @click="fetchData">Optimize Data</v-btn>
          <div v-if="data">
            <v-card>
              <v-card-title>Data from API:</v-card-title>
              <v-card-text>{{ data }}</v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        // JSON Data as parameter to pass
        let params = [
          {
            "OptionID": "GLL001",
            "MatsNum": 3,
            "Sizes": [
              "3000x89", "3650x89", "4000x89"
            ],
            "BladeSize": 3.5,
            "Data": [
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "5",
                "Length": "3593.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "23",
                "Length": "3593.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "3",
                "Length": "3478.50000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "12",
                "Length": "3478.50000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "7",
                "Length": "2979.50000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "9",
                "Length": "2683.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "24",
                "Length": "2683.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "26",
                "Length": "2683.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "6",
                "Length": "2568.50000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "4",
                "Length": "2069.50000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "11",
                "Length": "2069.50000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "14",
                "Length": "1841.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "8",
                "Length": "1773.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "10",
                "Length": "1773.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "13",
                "Length": "1773.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "29",
                "Length": "1773.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "31",
                "Length": "1773.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "32",
                "Length": "1773.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "22",
                "Length": "863.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "25",
                "Length": "863.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "27",
                "Length": "863.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "28",
                "Length": "863.00000",
                "Width": "89.00000"
              },
              {
                "CustomerCode": "4350354-2018",
                "Sequence": "30",
                "Length": "863.00000",
                "Width": "89.00000"
              }
            ]
          }
        ];

        await axios
          .post("http://localhost:8000/api/Optimization", params)
          .then((response) => {
            this.data = response.data;
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style>
/* Add global styles if needed */
</style>

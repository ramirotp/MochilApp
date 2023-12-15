<template>
    <v-card>
    <div>
        <div>
        <v-card-title class="text-h5">{{ this.backpack.titleText }}</v-card-title>
        <v-card-subtitle>{{ this.backpack.descriptionText }}</v-card-subtitle>
        <v-card-text>
        <p v-if="this.backpack.location.length > 0">Ubicación  {{ this.backpack.location }}</p>
        <p>Del {{ this.backpack.fromDate.toLocaleDateString("es-ES") }} al {{ this.backpack.toDate.toLocaleDateString("es-ES") }}</p>
        <p v-if="this.backpack.maxBackpackVol > 0">Vol. max  {{ this.backpack.maxBackpackVol }} litros</p>
        <p v-if="this.backpack.maxWeight > 0">Peso max  {{ this.backpack.maxWeight }} kilogramos</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <p v-if="this.backpack.packLines.length > 0">Progreso equipaje {{ Math.round((this.backpack.packLines.filter(function(packLine) { return packLine.isPackedFlag } ).length / this.backpack.packLines.length) * 100) }} %</p>
          <p v-if="this.backpack.taskLines.length > 0">Progreso tareas {{ Math.round((this.backpack.taskLines.filter(function(taskLine) { return taskLine.isTaskDoneFlag } ).length / this.backpack.taskLines.length) * 100) }} %</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-list lines="one" select-strategy="single-independent">
          <v-list-subheader class="text-h6">Equipaje</v-list-subheader>
            <v-list-item v-for="packLine in this.backpack.packLines" :value="packLine.lineItem" :key="packLine.lineNumber">
              <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn v-model="packLine.isPackedFlag"></v-checkbox-btn>
              </v-list-item-action>
              </template>
              <v-list-item-title :class="{ 'text-decoration-line-through': packLine.isPackedFlag }">{{ packLine.lineItem }}</v-list-item-title>
              <v-list-item-subtitle>Peso {{ calcLineWeight(packLine) }} kg &nbsp; Vol. {{ calcLineVol(packLine) }} L </v-list-item-subtitle>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list lines="one" select-strategy="single-independent" density="compact" class="ma-0 pa-0">
          <v-list-subheader class="text-h6">Tareas</v-list-subheader>
            <v-list-item v-for="taskLine in this.backpack.taskLines" :value="taskLine.lineTask" :key="taskLine.lineNumber">
              <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn v-model="taskLine.isTaskDoneFlag"></v-checkbox-btn>
              </v-list-item-action>
              </template>
              <v-list-item-title :class="{ 'text-decoration-line-through': taskLine.isTaskDoneFlag }">{{ taskLine.lineTask }}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-card-actions>
            <v-btn
            class="ms-2"
            variant="outlined"
            size="small"
            >
            Guardar
            </v-btn>
        </v-card-actions>
        </div>
    </div>
    </v-card>
</template>

<style scoped>
    .mdi-checkbox-marked {
        color: grey;
        text-decoration: line-through;
    } 
    .v-list{
        height:200px;
        overflow-y:auto
    }
</style>
  
  <script>
  export default {
    props: {
            backpack: Object,
        },
    data() {
      return {
        backpackOld: {
            titleText: 'Viaje de Navidad',
            descriptionText: 'Vamos a Francia! ',
            location: 'Poitiers',
            fromDate:  new Date("12/18/23"),
            toDate:  new Date("12/22/23"),
            maxBackpackVol: 15,
            maxWeight: 10,
            packLines: [{lineNumber: "1", lineItem: "Cepillo Dientes", lineQuantity: 1, unitVolLiters: 0.3, unitWeightKg: 0.01, isPackedFlag: false}
                    ,{lineNumber: "2", lineItem: "Calzonsillos", lineQuantity: 4, unitVolLiters: 0.1, unitWeightKg: 0.014, isPackedFlag: false}        
                    ,{lineNumber: "3", lineItem: "Pantalones", lineQuantity: 2, unitVolLiters: 0.18, unitWeightKg: 0.04, isPackedFlag: false}
                    ,{lineNumber: "4", lineItem: "Camara", lineQuantity: 1, unitVolLiters: 0.4, unitWeightKg: 0.30, isPackedFlag: false}
                    ,{lineNumber: "5", lineItem: "Jersey", lineQuantity: 3, unitVolLiters: 0.15, unitWeightKg: 0.03, isPackedFlag: false}
                    ,{lineNumber: "6", lineItem: "Cazadora", lineQuantity: 1, unitVolLiters: 0.3, unitWeightKg: 0.2, isPackedFlag: false}
            ],
            taskLines: [{lineNumber: "1", lineTask: "Pasar al cajero", isTaskDoneFlag: false}
                    ,{lineNumber: "2", lineTask: "Imprimir pases de abordar", isTaskDoneFlag: false}
                    ,{lineNumber: "3", lineTask: "Sacar basura", isTaskDoneFlag: false}
                    ,{lineNumber: "4", lineTask: "Revisar documentación", isTaskDoneFlag: false}
            ]
        }
      };
    },
    computed: {

    },
    methods: {
    updated(val) {
      console.log(val);
    },
    calcLineWeight(line) {
      return Math.round(line.lineQuantity * line.unitWeightKg * 100) / 100;
    },
    calcLineVol(line) {
      return Math.round(line.lineQuantity * line.unitVolLiters * 100) / 100;
    },
  },
  };
  </script>
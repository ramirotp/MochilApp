<template>
    <v-col
        align-self="center"
        sm="12"
        md="6"
        lg="4"
      >
        <v-card>
        <div>
            <div>
            <v-card-title class="text-h5">{{ backpack.titleText }}</v-card-title>
            <v-card-subtitle>{{ backpack.descriptionText }}</v-card-subtitle>
            <v-divider></v-divider>
            <v-list lines="one" select-strategy="single-independent">
              <v-list-subheader class="text-h6">Equipaje</v-list-subheader>
              
                <v-list-item v-for="packLine in backpack.packLines" :value="packLine.lineItem" :key="packLine.lineNumber">
                  <template v-slot:prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn v-model="packLine.isPackedFlag"></v-checkbox-btn>
                  </v-list-item-action>
                  </template>
                  <v-list-item-title :class="{ 'text-decoration-line-through': packLine.isPackedFlag }">{{ packLine.lineItem }}</v-list-item-title>
                  <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                </v-list-item>


              <v-list-item value="sound">
                <template v-slot:prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                  </v-list-item-action>
                </template>

                <v-list-item-title>Sound</v-list-item-title>

                <v-list-item-subtitle>
                  Auto-update apps at any time. Data charges may apply
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item value="widgets">
                <template v-slot:prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                  </v-list-item-action>
                </template>

                <v-list-item-title>Auto-add widgets</v-list-item-title>

                <v-list-item-subtitle>
                  Automatically add home screen widgets when downloads complete
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <h4>{{ backpack.location }}</h4>
            <v-divider></v-divider>
            <v-checkbox v-for="packLine in backpack.packLines" :class="{ 'text-decoration-line-through': packLine.isPackedFlag }" :label="packLine.lineItem" v-model="packLine.isPackedFlag" class="d-flex ma-0 pa-0" density="compact"></v-checkbox>
            <v-divider></v-divider>
            <v-checkbox v-for="taskLine in backpack.taskLines" :class="{ 'text-decoration-line-through': taskLine.isTaskDoneFlag }" :label="taskLine.lineTask" v-model="taskLine.isTaskDoneFlag" class="d-flex ma-0 pa-0" density="compact"></v-checkbox>
            <v-card-actions>
                <v-btn
                class="ms-2"
                variant="outlined"
                size="small"
                >
                asdf
                </v-btn>
            </v-card-actions>
            </div>
            <!--
            <v-avatar
            class="ma-3"
            size="125"
            rounded="0"
            >
            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
            </v-avatar>
            -->
        </div>
        </v-card>
    </v-col>
</template>

<style scoped>
    .mdi-checkbox-marked {
        color: grey;
        text-decoration: line-through;
    } 
</style>
  
  <script>
  export default {
    data() {
      return {
        backpack: {
            titleText: 'Mi primer mochila',
            descriptionText: 'Mi Primera descripcion',
            location: 'Barcelona',
            packLines: [{lineNumber: "1", lineItem: "Cepillo Dientes", lineQuantity: 1, isPackedFlag: false}
                    ,{lineNumber: "2", lineItem: "Calzonsillos", lineQuantity: 4, isPackedFlag: false}        
            ],
            taskLines: [{lineNumber: "1", lineTask: "Pasar al cajero", isTaskDoneFlag: false}
                    ,{lineNumber: "2", lineTask: "Imprimir pases de abordar", isTaskDoneFlag: false}
            ]
        }
      };
    },
    methods: {
    updated(val) {
      console.log(val);
    }
  },
    /*
    methods: {
      openForm() {
        this.isCreating = true;
      },
      closeForm() {
        this.isCreating = false;
      },
      sendForm() {
        if (this.titleText.length > 0 && this.descriptionText.length > 0) {
          const title = this.titleText;
          const description = this.descriptionText;
          this.$emit('create-note', {
            title,
            description,
          });
          // Clean fields after submit
          this.titleText = '';
          this.descriptionText = '';
          this.isCreating = false;
        }
      },
    },*/
  };
  </script>
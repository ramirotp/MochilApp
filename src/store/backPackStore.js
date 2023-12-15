import { defineStore } from "pinia";

export const useBackPackStore = defineStore("backPackStore", {
    state: () => ({
        backpacks: [
                {
                backPackId: '001',
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
            },
            {
                backPackId: '002',
                titleText: 'Viaje de trabajo',
                descriptionText: 'Reunión para objetivos del año',
                location: 'Madrid',
                fromDate:  new Date("1/15/24"),
                toDate:  new Date("1/20/24"),
                maxBackpackVol: 15,
                maxWeight: 20,
                packLines: [{lineNumber: "1", lineItem: "Cepillo Dientes", lineQuantity: 1, unitVolLiters: 0.3, unitWeightKg: 0.01, isPackedFlag: false}
                        ,{lineNumber: "2", lineItem: "Americana", lineQuantity: 2, unitVolLiters: 0.1, unitWeightKg: 0.016, isPackedFlag: false}        
                        ,{lineNumber: "3", lineItem: "Pantalones", lineQuantity: 2, unitVolLiters: 0.18, unitWeightKg: 0.04, isPackedFlag: false}
                        ,{lineNumber: "4", lineItem: "Portatil", lineQuantity: 1, unitVolLiters: 0.4, unitWeightKg: 0.30, isPackedFlag: false}
                        ,{lineNumber: "5", lineItem: "Zapatps", lineQuantity: 1, unitVolLiters: 0.15, unitWeightKg: 0.03, isPackedFlag: false}
                        ,{lineNumber: "6", lineItem: "Maquinilla de afetirar", lineQuantity: 1, unitVolLiters: 0.3, unitWeightKg: 0.2, isPackedFlag: false}
                ],
                taskLines: [{lineNumber: "1", lineTask: "Reservar hotel", isTaskDoneFlag: false}
                        ,{lineNumber: "2", lineTask: "Imprimir pases de abordar", isTaskDoneFlag: false}
                        ,{lineNumber: "3", lineTask: "Reportar Gastos", isTaskDoneFlag: false}
                        ,{lineNumber: "4", lineTask: "Revisar documentación", isTaskDoneFlag: false}
                ]
            }
        ]
    }),
    getters: {
        getContactsWithName(name) {
            return this.backpacks.filter((backpack) => backpack.titleText.includes(name))
        }
    },
    actions: {
        newFriend(newBackPack) {
          this.backpacks.push(newBackPack);
        }
      }
});
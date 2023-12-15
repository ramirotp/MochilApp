<template>
    <div>
      <v-img
        class="mx-auto my-6"
        max-width="200"
        src="../assets/MochilApp_logo.png"
      ></v-img>
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <v-card-title class="text-h7 text-md-h6 text-lg-h5">Bienvenidos a MochilApp</v-card-title>
        <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>
  
        <v-text-field
          density="compact"
          placeholder="Email"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="loginUser"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Contraseña
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Introducir contraseña"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="loginPassword"
        ></v-text-field>
  

        <v-alert v-if="this.invalidLogin"
    density="compact"
    type="warning"
    title="Login incorrecto"
    text="Comprueba tu usuario y contraseña"
  ></v-alert>
  
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click.stop.prevent="login()"
        >
          Acceder
        </v-btn>
  
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="/signup"
            rel="noopener noreferrer"
            target="singup"
          >
            Darse de alta <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
  
    const visible = ref(false)
  </script>
  
  <script>
    export default {
      data: () => ({
        visible: false,
        loginUser: undefined,
        loginPassword: undefined,
        invalidLogin: false,
      }),
      methods: {
        login() {
            if (this.loginUser === "ramirotp@outlook.com" && this.loginPassword === "12345678") {
                console.log("contraseña correcta");
                localStorage.setItem("MochilApptoken","dummy");
                this.$router.push("/");
            } else {
                this.invalidLogin = true;
                setTimeout(()=>{
                    this.invalidLogin=false
                },1500)
            }
        },
        }
    }
  </script>
<template>
    <v-card
      class="mx-auto"
      style="max-width: 500px;"
    >
      <v-toolbar
        cards
        dark
        flat
      >
        <v-btn icon @click.stop.prevent="backToLogin()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-card-title class="text-h6 font-weight-regular">
          Nueva cuenta
        </v-card-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form
        ref="form"
        v-model="isValid"
        class="pa-4 pt-6"
      >
      <v-text-field
        v-model="name"
        counter="6"
        :rules="[rules.length(6)]"
        label="Name"
        required
      ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[rules.email]"
          variant="filled"
          color="deep-purple"
          label="Email"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[rules.password, rules.length(8)]"
          variant="filled"
          color="deep-purple"
          counter="6"
          label="Contraseña"
          style="min-height: 96px"
          type="password"
        ></v-text-field>
        <v-checkbox
          v-model="agreement"
          :rules="[rules.required]"
          color="deep-purple"
        >
        <template v-slot:label>
            Acepto los &nbsp;
            <a
              href=""
              @click.stop.prevent="dialog = true"
            >Términos de Servicio y Política de Privacidad</a>
          </template>
        </v-checkbox>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          variant="text"
          @click="form.reset()"
        >
          Clear
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!isValid"
          :loading="isLoading"
          color="deep-purple-accent-4"
        >
          Submit
        </v-btn>
      </v-card-actions>
      <v-dialog
        v-model="dialog"
        max-width="400"
        persistent
      >
        <v-card>
          <v-card-title class="text-h5 bg-grey-lighten-3">
            Términos de Servicio y Política de Privacidad
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              variant="text"
              @click="agreement = false, dialog = false"
            >
              Rechazar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="deep-purple"
              variant="tonal"
              @click="agreement = true, dialog = false"
            >
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </template>
  
  <script>
    export default {
      data: () => ({
        agreement: false,
        dialog: false,
        email: undefined,
        isValid: false,
        isLoading: false,
        password: undefined,
        phone: undefined,
        rules: {
          email: v => !!(v || '').match(/@/) || 'Introducir un email válido',
          length: len => v => (v || '').length >= len || `La contraseña requiere un mínimo de ${len} caracteres`,
          password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
            'La contraseña debe incluir al menos una letra en mayúscula, un número y un caracter especial',
          required: v => !!v || 'Este campo es requerido',
        },
      }),
      methods: {
        backToLogin() {
            this.$router.push("/login");
        },
        }
    }
  </script>
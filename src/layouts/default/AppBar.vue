<template>
  <v-app-bar flat>
    <v-app-bar-title class="text-h5 text-medium-emphasis">MochilApp</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item prepend-avatar="@/assets/MochilappProf_Ramiro.jpg" title="Ramiro Teran"
        subtitle="ramirotp@outlook.com"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-exit-to-app" title="Logout" value="logout" @click.stop.prevent="logout()"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
        data: () => ({
          dummy: undefined,
        }),
        methods: {
          logout() {
              localStorage.removeItem("MochilApptoken");
              this.$router.push("/login");
          },
          }
      }
</script>

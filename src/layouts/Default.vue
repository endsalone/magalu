<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal bordered class="bg-white text-white">
      <q-toolbar>

          <q-tabs align="center" class="text-teal" indicator-color="transparent" active-color="blue" v-model="tab">
            <q-route-tab name="progresso" icon="arrow_upward" label="Progresso" :to="{ name: 'progresso'}"></q-route-tab>
            <q-route-tab name="campanhas" icon="star" label="Campanhas" :to="{ name: 'campanhas'}"></q-route-tab>
            <q-route-tab name="perfil" icon="person" label="Perfil" :to="{ name: 'perfil'}"></q-route-tab>
          </q-tabs>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      tab: ''
    }
  }
}
</script>
<style>
footer{ border: 0px !important; }
</style>

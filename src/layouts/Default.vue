<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <transition
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutLeft"
        appear
        :duration="380"
      >
        <router-view />
      </transition>
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
<<<<<<< HEAD
@font-face {
  font-family: barlow;
  src: url(~assets/fonts/barlow-condensed-medium.otf);
}
@font-face {
  font-family: Montserrat-ExtraBold;
  src: url(~assets/fonts/Montserrat-ExtraBold.ttf);
}
@font-face {
  font-family: OpenSans-Regular;
  src: url(~assets/fonts/OpenSans-Regular.ttf);
}
=======
>>>>>>> 4bc180916ec9dcf495b91ecee035095142b87c69
footer{ border: 0px !important; }

</style>

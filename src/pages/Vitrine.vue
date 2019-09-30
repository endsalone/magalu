<template>
  <q-page  class="">
    <div class="row justify-center">
      <h3>Campanhas</h3>
      <q-linear-progress rounded style="height: 10px; margin-top: -10px; margin-bottom: 25px" :value="0.7" color="primary" class="q-mt-sm col-9" />
      <p class="text-body1">Vitrine Patrocinada</p>
    </div>
    <div class="flex flex-center">
      <div class="col-9">
        <q-img src="./images/vitrine-video.png" style="width: 250px"></q-img>
      </div>
    </div>
    <div class="absolute-bottom">
      Teste
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'indexP'
}
</script>
<style scoped>
.q-btn>>>div {
  width: 91%;
  display: -webkit-box;
}
/*
.q-btn>>>.q-icon {
  margin: 0px;
} */
.q-focus-helper{
  display: none !important;
}
a.q-btn{
  display: block;
}
</style>

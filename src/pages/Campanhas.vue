<template>
  <q-page  class="">
    <div class="row justify-center">
      <h3>Campanhas</h3>
      <q-linear-progress rounded style="height: 10px; margin-top: -10px; margin-bottom: 25px" :value="0.4" color="primary" class="q-mt-sm col-9" />
      <p class="text-body1">Selecione uma campanha</p>
      <div class="col-10">
        <q-btn
          size="20px"
          color="teal"
          align="left"
          class="full-width q-mt-md"
          label="Google Coperado"
          style="padding: 12px"
          icon-right="keyboard_arrow_right"
        />
        <q-btn
          size="20px"
          color="teal"
          align="left"
          class="full-width q-mt-md"
          label="Vitrine Patrocinada"
          style="padding: 12px"
          icon-right="keyboard_arrow_right"
          :to="{ name: 'vitrine' }"
        />
        <q-btn
          size="20px"
          color="teal"
          align="left"
          class="full-width q-mt-md"
          label="Midia Nativa"
          style="padding: 12px"
          icon-right="keyboard_arrow_right"
        />
        <q-btn
          size="20px"
          color="teal"
          align="left"
          class="full-width q-mt-md"
          label="Inventário"
          style="padding: 12px"
          icon-right="keyboard_arrow_right"
        />
      </div>
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

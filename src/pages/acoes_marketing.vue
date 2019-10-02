<template>
  <q-page  class="">
    <div class="row justify-center">
      <h3 class="ca-text">Acões Ativa</h3>
      <div class="col-10">
        <q-btn
          size="17px"
          color="teal"
          align="left"
          class="full-width q-mt-md"
          label="Meu Pet Feliz"
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
.ca-text{
  font-size: 26px;
  color: #027be3;
}
</style>

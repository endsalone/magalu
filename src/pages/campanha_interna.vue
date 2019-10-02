<template>
  <q-page>
    <h3 class="ca-text">Campanhas Interna</h3>
    <img class="moeda" src="~/assets/moeda.png" alt="">
    <div class="container-padrao">
    <div class="row justify-center">
      <div class="col-10">
        <q-btn
          size="14px"
          align="left"
          outline style="color: goldenrod; background: #f3f3f3"
          class="full-width q-mt-md"
          label="Embalagem Nota Mil"
          icon-right="keyboard_arrow_right"
        />
      </div>
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
p, h3 {
      margin: 0;
      padding: 0;
  }
.container-padrao{
      padding: 14px 10px;
      margin: 0 auto;
}
.moeda{
    border-style: none;
    height: 57px;
    position: absolute;
    top: 51px;
    left: 40%;
    animation: gira 15s linear infinite;
}
@keyframes gira {
  to {
    transform: rotate(-360deg);
  }
}
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
  font-size: 20px;
  color: #ffffff;
  font-family: OpenSans-Regular;
  background: #949494;
  padding: 7px 19px;
  width: 100%;
  margin-bottom: 18px;
  height: 95px;
  text-align: center;
  border-radius: 0 0 47% 47%;
}
</style>

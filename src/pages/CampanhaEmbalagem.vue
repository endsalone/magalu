<template>
  <q-page class="flex flex-center">
      <q-page>
        <div class="container-padrao">
          <p class="texto-blue">Embalagem nota mil</p>
          <p class="sub-title">faltam 27 dias</p>
          <img class="img-resp faixa-esp" src="~/assets/traco_colorido.jpg" alt="">
          <img class="img-resp marg-center" src="~/assets/embalagem_caixa.jpg" alt="">
          <div class="caixa">
              <p class="open-s">As 30 melhores embalagens ganham 120 créditos.</p>
              <p class="detalhes">detalhes +</p>
          </div>
          <div class="indicad">
            <p>AGILIDADE <span>56%</span></p>
            <p>QUALIDADE <span>46%</span></p>
            <p>SATISFAÇÃO <span>60%</span></p>
            <p>EXPERIÊNCIA <span>35%</span></p>
          </div>
          <router-link to="/"><q-btn class="expandir exp-btn" unelevated rounded color="primary" label="PARTICIPAR" ></q-btn></router-link>
        </div>
    </q-page>
  </q-page>
</template>
<style lang="stylus">
  p {
    margin: 0;
    padding: 0;
  }
  .container-padrao{
    padding: 14px 10px;
    margin: 0 auto;
  }
  .sub-title{
    color: #c3bebe;
    font-family: barlow;
    font-size: 18px;
  }
  .caixa {
    padding: 5px;
    border: 1px solid #d4d0d0;
    margin: 17px auto 5px auto;
    color: #8c8888;
    border-radius: 10px;
  }
  .caixa::after, .caixa::before{
    content: '';
    display: table;
  }
  .caixa::after{
    clear: both;
  }
  .open-s {
    font-family: OpenSans-Regular;
  }
  .detalhes {
    margin-top: 29px;
    color: #bdb7b7;
    float: right;
    font-family: Montserrat-ExtraBold;
  }
  .faixa-esp {
    margin: 10px 0;
  }
  .marg-center {
    margin: 0 auto;
  }
  .img-resp{
    max-width: 100%;
    display: block;
  }
  .texto-blue{
    color: #559494;
    font-family: barlow;
    font-size: 21px;
  }
  .indicad {
    color: #6557FF;
     font-family: Montserrat-ExtraBold;
    font-size: 16px;
    margin: 30px auto 10px auto;
  }
  .indicad span {
    float: right;
    margin-right: 5px;
  }
  .expandir {
    width: 100%;
  }
  .exp-btn {
    margin-top: 10px;
  }
</style>
<script>
export default {
  name: 'indexP'
}
</script>

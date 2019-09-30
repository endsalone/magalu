<template>
  <q-page padding>
    <q-page>
      <div class="container-padrao">
        <div class="equilibrio"><p>Progresso: 80</p></div>
        <div class="circulo">
          <p class="valor-c">242</p>
          <p class="cred">Créditos</p>
        </div>
        <div class="box-pro">
          <div class="row">
            <div class="col-4 col-md-4">
              <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="value1"
              size="70px"
              :thickness="0.25"
              color="light-blue-10"
              track-color="grey-3"
              >
              <q-avatar size="50px">
                <img src="~/assets/perna.png">
              </q-avatar>
              </q-circular-progress>
            </div>
            <div class="col-8 col-md-8">
              <div class="progr-caixa">
              <p class="title-ag cor-blue">AGILIDADE</p>
              <p class="cor-p">Prazo de Entrega dos pedidos, Protocolos em atraso</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box-pro">
          <div class="row">
            <div class="col-4 col-md-4">
              <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="value2"
              size="70px"
              :thickness="0.25"
              color="light-green-6"
              track-color="grey-3"
              >
              <q-avatar size="50px">
                <img src="~/assets/peso.png">
              </q-avatar>
              </q-circular-progress>
            </div>
            <div class="col-8 col-md-8">
              <div class="progr-caixa">
              <p class="title-ag cor-verde">QUALIDADE</p>
              <p class="cor-p">CSAT: avaliação de atendimento</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box-pro">
          <div class="row">
            <div class="col-4 col-md-4">
              <q-circular-progress
              show-value
              font-size="6px"
              class="q-ma-md"
              :value="value3"
              size="70px"
              :thickness="0.25"
              color="red-6"
              track-color="grey-3"
              >
              <q-avatar size="50px">
                <img src="~/assets/coracao.png">
              </q-avatar>
              </q-circular-progress>
            </div>
            <div class="col-8 col-md-8">
              <div class="progr-caixa">
              <p class="title-ag color-red">SATISFAÇÃO</p>
              <p class="cor-p">Quantidade de pedidos cancelados, reclamações formais (Procon, Reclame aqui).</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box-pro">
          <div class="row">
            <div class="col-4 col-md-4">
              <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="value4"
              size="70px"
              :thickness="0.25"
              color="yellow-7"
              track-color="grey-3"
              >
              <q-avatar size="50px">
                <img src="~/assets/fogo.png">
              </q-avatar>
              </q-circular-progress>
            </div>
            <div class="col-8 col-md-8">
              <div class="progr-caixa">
              <p class="title-ag cor-yell">EXPERIÊNCIA</p>
              <p class="cor-p">Treinamentos que a Magalu oferece.</p>
              </div>
            </div>
          </div>
        </div>
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
  .equilibrio {
    background: #f7924d;
    display: block;
    padding: 6px 5px;
    margin: 4px auto;
    text-align: center;
    color: #fff;
    border-radius: 27px;
    width: 129px;
    box-shadow: 0 0 3px 2px rgba(0,0,0,0.1);
  }
  .circulo {
    display: block;
    background: #f7924d;
    color: #000000;
    text-align: center;
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border-radius: 50%;
    line-height: 1.0;
    padding: 25px 0 0 0;
  }
  .cred {
    font-size: 19px;
    display: block
  }
  .valor-c {
    font-size: 45px;
  }
  .progr-caixa {
    padding: 9px 0 3px 0;
  }
  .title-ag {
    font-size: 17px;
    font-family: Montserrat-ExtraBold;
  }
  .cor-blue {
    color: #6557FF;
  }
  .cor-verde{
    color: #558b2f;
  }
  .cor-yell{
    color: #fdd835;
  }
  .color-red {
    color: #f44336;
  }
  .box-pro {
    margin-top: 8px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.3);
  }
</style>

<script>
export default {
  name: 'progressoP',
  data () {
    return {
      value1: 60,
      value2: 50,
      value3: 20,
      value4: 70
    }
  }
}
</script>

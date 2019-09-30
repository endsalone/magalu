<template>
  <q-page>
        <header class="header">
          <h1>Minhas Campanhas</h1>
        </header>
      <div class="container-padrao">
        <div class="box-minhas">
          <div class="row">
            <div class="col-1 col-md-1">
              <img class="cor-img" src="~/assets/radar.svg" alt="">
            </div>
            <div class="col-7 col-md-7">
              <p class="tile-ads">Magalu ADS</p>
            </div>
          </div>
          <div class="row">
            <div class="lista-meus-ads">
             <ul>
              <li class="lista-ads">
                <div class="row">
                  <div class="col-7 col-md-7">
                    <p>Google Cooperado</p>
                    <p class="ads-data">02/08 a 15/08</p>
                  </div>
                  <div class="col-4 col-md-4"><div class="seta-ads">></div></div>
                </div>
              </li>
              <li class="lista-ads">
                <div class="row">
                  <div class="col-7 col-md-7">
                    <p>Google Cooperado</p>
                    <p class="ads-data">02/08 a 15/08</p>
                  </div>
                  <div class="col-4 col-md-4"><div class="seta-ads">></div></div>
                </div>
              </li>
            </ul>
          </div>
          </div>
          <div class="row"><button class="novacamp">+ nova campanha</button></div>
        </div>
        <div class="row">
          <button class="list-btn cor-bb">Ações de Marketing</button>
        </div>
        <div class="row">
          <button class="list-btn cor-bl">Campanhas Interna</button>
        </div>
    </div>
  </q-page>
</template>
<style lang="stylus">
  h1, ul, li, p {
    margin: 0;
    padding: 0;
  }
 .container-padrao {
      padding: 14px 10px;
      margin: 0 auto;
  }
  .header{
    background-image: linear-gradient(to right top, #beb6be, #beb3bf, #bdb0bf, #bdadc0, #bcaac1, #bea4c4, #c19dc7, #c496ca, #cd88ce, #d777cf, #e263ce, #ee49ca);
    display: block;
    padding: 20px 10px;
    border-radius: 0 0 46px 46px;
    min-height: 234px;
  }
  .header h1{
    font-family: Montserrat-ExtraBold;
    font-size: 18px;
    color: #ffffff;
    line-height: 3rem;
  }
  .box-minhas {
   display: block;
    padding: 9px 21px;
    margin: -152px auto 21px auto;
    box-shadow: 0 0 4px 2px rgba(0,0,0,0.3);
    background: #fff;
    border-radius: 30px;
    background-color: #fff;
    max-width: 280px;
  }
  .box-minhas img {
    margin-top: 4px;
    float: left;
  }
  .lista-meus-ads {
    width: 100%;
  }
  .tile-ads {
    font-size: 21px;
    font-family: Montserrat-ExtraBold;
    color: #0f8787;
    margin-bottom: 10px;
    margin-left: 5px;
  }
  .lista-ads {
    display: block;
    border: 1px solid #c1bbbb;
    border-radius: 10px;
    padding: 7px 6px;
    margin: 5px auto;
  }
  .lista-meus-ads ul li {
    list-style: none;
    display: block;
    font-family: Montserrat-Regular;
    color: #565555;
    background: #f7f7f7;
  }
  .lista-meus-ads ul {
    display: block;
    margin: 0 auto;
  }
  .novacamp {
    padding: 5px 36px;
    border: 1px solid #d679cf;
    font-family: Montserrat-Regular;
    border-radius: 10px;
    display: block;
    margin: 5px auto;
    color: #a22da1;
    background: #ffffff;
  }
  .list-btn{
    margin: 5px auto;
    padding: 5px 52px;
    border-radius: 6px;
    color: #ffffff;
  }
  .cor-bb{
    background: #649ece;
    border: 1px solid #649ece;
  }
  .cor-bl {
     background: #ea853f;
     border: 1px solid #ea853f;
  }
  .seta-ads {
    font-size: 27px;
    float: right;
  }
  .ads-data {
    font-size: 11px;
  }
</style>
<script>
export default {
  name: 'indexP'
}
</script>

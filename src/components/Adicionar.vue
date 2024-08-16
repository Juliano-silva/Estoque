<template>
  <div id="Input_Body">
    <select id="Escolhas_Region"></select>
    <input type="text" id="name" placeholder="Nome do Item">
    <input type="number" id="Quantidade" placeholder="Quantidade por Item">
    <input type="number" id="preco" placeholder="Preço do Item">
    <button v-on:click="Click">Enviar</button>
  </div>
</template>

<script>
import $ from 'jquery'
var Url = "https://labanerd-80486-default-rtdb.firebaseio.com/Estoque/.json"
export default {
  mounted() {
    this.loadFetch()
  },
  methods: {
    loadFetch() {
      fetch('https://restcountries.com/v3.1/all').then((response) => response.json().then((dados) => {
        for (var i = 0; i < dados.length; i++) {
          var Opt = document.createElement("option")
          Opt.innerText = `${dados[i].name.common} (${i})`
          Opt.value = `${dados[i].name.common} (${i})`
          document.getElementById("Escolhas_Region").append(Opt)
        }
      }))
    },
    Click: function (event) {
      $.ajax({
        url: Url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          name: document.getElementById("name").value,
          quantidade: document.getElementById("Quantidade").value,
          regiao: document.getElementById("Escolhas_Region").value,
          preco: document.getElementById("preco").value
        })
      })
    }
  }
}

</script>
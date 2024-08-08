<template>
  <h1>Olá,Mundo</h1>
  <select id="Escolhas_Region"></select>
</template>

<script>

fetch('https://restcountries.com/v3.1/all').then((response) => response.json().then((dados) => {
  for (var i = 0 ; i < dados.length; i++){
    var Opt = document.createElement("option")
    Opt.innerText = `${dados[i].name.common} (${i})`
    Opt.value = `${dados[i].name.common} (${i})`
    document.getElementById("Escolhas_Region").append(Opt)
  }
}))


</script>
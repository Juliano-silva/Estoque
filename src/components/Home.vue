<template>
    <h1>Home</h1>
    <div id="Conteudo"></div>
</template>

<script>
import $ from 'jquery'
var Url = "https://labanerd-80486-default-rtdb.firebaseio.com/Estoque/.json"
export default{
    mounted(){
        this.loadFetch()
    },
    methods:{
        loadFetch(){
            fetch(Url).then((response) => response.json().then((dados) => {
                var Obj = Object.keys(dados)
                for (var i = 0; i < Obj.length; i++) {
                    var Caixa = document.createElement("div")
                    var Titulo = document.createElement("h1")
                    var Quantidade = document.createElement("h5")
                    var Preco = document.createElement("h5")
                    var Regiao = document.createElement("h2")
                    Caixa.id = "Caixa_Item"
                    Titulo.innerText = dados[Obj[i]].name
                    Quantidade.innerText = dados[Obj[i]].quantidade
                    Preco.innerText = dados[Obj[i]].preco
                    Regiao.innerText = dados[Obj[i]].regiao
                    Caixa.append(Titulo,Preco,Quantidade,Regiao)
                    document.getElementById("Conteudo").append(Caixa)
                }
                
            }))
        }
    }
}

</script>
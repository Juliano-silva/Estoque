<template>
    <div id="Conteudo"></div>
</template>

<script>
import $ from 'jquery'
var Url = "https://labanerd-80486-default-rtdb.firebaseio.com/Estoque/.json"
var DELETE_URL = "https://labanerd-80486-default-rtdb.firebaseio.com/Estoque/"
export default{
    mounted(){
        this.loadFetch()
    },
    methods:{
        loadFetch(){
            fetch(Url).then((response) => response.json().then((dados) => {
                var Obj = Object.keys(dados)
                for (var i = 0; i < Obj.length; i++) {
                    console.log(Obj);
                    
                    var Caixa = document.createElement("div")
                    var Titulo = document.createElement("h1")
                    var Quantidade = document.createElement("h5")
                    var Preco = document.createElement("h5")
                    var Regiao = document.createElement("h2")
                    var Remove = document.createElement("button")
                    Caixa.id = "Caixa_Item"
                    Remove.innerText = "Remover"
                    Remove.id = Obj[i]
                    Remove.className = "Remover"
                    Titulo.innerText = dados[Obj[i]].name
                    Quantidade.innerText = dados[Obj[i]].quantidade
                    Preco.innerText = "R$ " + dados[Obj[i]].preco
                    Regiao.innerText = dados[Obj[i]].regiao
                    Remove.addEventListener("click",function(){
                      fetch(`${DELETE_URL}${this.id}/.json`,{
                        method:"DELETE"
                      }).then(res => res.text()).then(res => console.log(res))
                    })
                    
                    Caixa.append(Titulo,Preco,Quantidade,Regiao,Remove)
                    document.getElementById("Conteudo").append(Caixa)
                    
                }
                
            }))
        }
    }
}

</script>
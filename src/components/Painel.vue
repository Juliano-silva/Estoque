<template>
    <div id="Caixas_Painel">
        <div>
            <h2>Quantidade de item <h3 id="Item_Quantidade"></h3>
            </h2>
        </div>
        <div>
            <h2>Quantidade de Produtos <h3 id="Item_Quantidade_Produtos"></h3>
            </h2>
        </div>
        <div>
            <h2>Item com o Menor preço <h3 id="Menor_Preco"></h3>
            </h2>
        </div>
        <div>
            <h2>Item com o Maior preço <h3 id="Maior_Preco"></h3>
            </h2>
        </div>
        <div>
            <h2>Preço de todos os itens <h3 id="Valor_Item"></h3>
            </h2>
        </div>
    </div>
    <div id="Stock_Div">
        <canvas id="Stock_Region"></canvas>
    </div>
    <div id="Top_Div">
        <canvas id="Top"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto'

var Url = "https://labanerd-80486-default-rtdb.firebaseio.com/Estoque/.json"

var Names = []
var Quantidade = 0
var Preco_All = 0
var Maior = 0
var Menor = 0
export default {
    mounted() {
        this.loadFetch()

        fetch(Url).then(function (response) {
            if (response.ok == true) {
                return response.json()
            }
        }).then(function (data) {
            var Obj = Object.keys(data)
            for (var i = 0; i < Obj.length; i++) {
                Names.push([data[Obj[i]]][0])
            }
            createChart(Names, 'bar')
            createChart2(Names, "bar")
        })

        function createChart(data, types) {
            new Chart(document.getElementById("Top"), {
                type: types,
                data: {
                    labels: data.map(row => row.name),
                    datasets: [{
                        label: "Top 10 Produtos",
                        data: data.map(row => row.preco),
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true
                }
            })
        }


        function createChart2(data, types) {
            new Chart(document.getElementById("Stock_Region"), {
                type: types,
                data: {
                    labels: data.map(row => row.regiao),
                    datasets: [{
                        label: "Quantidade de Estoque por localização",
                        data: data.map(row => row.quantidade),
                        borderWidth: 1,
                    }]
                },
                
            })
        }
    },
    methods: {
        loadFetch() {
            fetch(Url).then((response) => response.json().then((dados) => {
                var Obj = Object.keys(dados)
                for (var i = 0; i < Obj.length; i++) {
                    Quantidade += parseInt(dados[Obj[i]].quantidade)
                    Preco_All += parseInt(dados[Obj[i]].preco)

                    if (parseInt(dados[Obj[i]].preco) > Maior) {
                        Maior = parseInt(dados[Obj[i]].preco)
                    }

                    if (parseInt(dados[Obj[i]].preco) < Maior) {
                        Menor = parseInt(dados[Obj[i]].preco)
                    }

                    document.getElementById("Item_Quantidade_Produtos").innerText = Quantidade
                    document.getElementById("Item_Quantidade").innerText = parseInt(i) + 1
                    document.getElementById("Menor_Preco").innerText = "R$ " + Menor
                    document.getElementById("Maior_Preco").innerText = "R$ " + Maior
                    document.getElementById("Valor_Item").innerText = "R$ " + parseInt(Preco_All)
                }
            }))
        }
    }
}

</script>
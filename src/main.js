import { createApp } from 'vue'
import './style.css'
import { createRouter,createWebHistory } from 'vue-router'
import Painel from './components/Painel.vue'
import Adicionar from './components/Adicionar.vue'
import App from './App.vue'
import Home from './components/Home.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/App",name:"App",component:App},
        {path:"/",name:"Home",component:Home},
        {path:"/Adicionar",name:"Adicionar",component:Adicionar},
        {path:"/Painel",name:"Painel",component:Painel}
    ]
})

createApp(App).use(router).mount('#app')

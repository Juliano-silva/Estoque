<template>
     <div id="Header">
        <h1>Estoque Web</h1>
        <div id="Header_Link">
            <router-link to="/">Home</router-link>
        <router-link to="/Adicionar">Adicionar</router-link>
        <router-link to="/Painel">Painel</router-link>
        </div>
    </div>
    <router-view></router-view>
</template>
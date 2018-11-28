<template>
    <div class="tabs">
        <div class="tabs-item"><router-link to="/">Главная</router-link></div>
        <div class="tabs-item"><router-link to="/table">Таблица</router-link></div>
    </div>
</template>

<script>
    export default {
        name: "Tabs"
    }
</script>
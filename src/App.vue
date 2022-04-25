<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
</script>

<template>
    <div class="top-menu">MEDIA ENQUIRY</div>
    <div class="layout">
        <header class="header-section">
            <Navigation />
        </header>
        <section class="body-section">
            <RouterView />
        </section>
    </div>
</template>

<style>
@import "@/assets/base.css";
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.top-menu {
    background-color: #001d3b;
    color: #ffffff;
    padding: 20px;
    max-height: 60px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}

#app {
    font-weight: normal;
}

a,
.green {
    text-decoration: none;
    transition: 0.4s;
}

.layout {
    display: flex;
    width: 100%;
    margin-top: 60px;
}

.header-section {
    position: fixed;
    z-index: 100;
}

.body-section {
    margin-left: 200px;
    flex-grow: 1;
    top: 0;
    margin-bottom: 0;
}
</style>

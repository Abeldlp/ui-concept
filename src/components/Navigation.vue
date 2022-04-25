<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="wrapper">
        <nav>
            <RouterLink to="/">
                <div style="display:flex; align-items:center">
                    <q-icon style="margin-right:5px;" size="15px" name="home" />
                    <span>Home</span>
                </div>
            </RouterLink>
            <RouterLink to="/about">
                <div style="display:flex; align-items:center">
                    <q-icon style="margin-right:5px;" size="15px" name="create" />
                    <span>Add Enquiry</span>
                </div>
            </RouterLink>
        </nav>
    </div>
</template>

<style scoped>
nav {
    width: 200px;
    text-align: center;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: calc(100vh - 60px);
}

nav a.router-link-exact-active {
    color: white;
    background-color: #176fc6;
}

nav a.router-link-exact-active:hover {
    background-color: #176fc6;
}

nav a {
    width: 100%;
    text-align: left;
    padding: 0 1rem;
    color: black;
}

nav a:first-of-type {
    border: 0;
}
</style>

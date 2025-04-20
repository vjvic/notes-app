<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <Header />

      <!-- Main section for route views -->
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

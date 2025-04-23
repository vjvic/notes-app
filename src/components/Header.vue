<template>
  <!-- Header -->
  <header class="header uk-flex uk-flex-between">
    <div class="header__title">
      <h3 class="uk-text-bold uk-margin-remove">All Notes</h3>
    </div>

    <div class="header__settings uk-flex uk-width-1-6">
      <SearchBar />
      <Settings />
    </div>
  </header>
</template>

<script setup lang="ts">
import { Settings } from "lucide-vue-next";
import SearchBar from "./SearchBar.vue";
</script>

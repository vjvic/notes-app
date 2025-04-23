<script setup lang="ts"></script>

<template>
  <div class="home-layout">
    <div class="home-layout__sidebar">
      <Button color="primary" border="pill" class="uk-width-1-1">
        <Plus />
        Create New Note
      </Button>
    </div>

    <div class="home-layout__content">
      <p>Main content</p>
    </div>
  </div>
</template>

<script setup>
import Button from "@/Components/Button.vue";
import { Plus } from "lucide-vue-next";
</script>

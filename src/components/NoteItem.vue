<template>
  <aside class="home-layout__sidebar">
    <Button
      color="primary"
      border="pill"
      class="uk-width-1-1 uk-margin-medium-bottom"
    >
      <Plus />
      Create New Note
    </Button>

    <a href="/" class="note-item note-item--active uk-border-rounded">
      <article>
        <h5 class="uk-text-bold uk-margin-remove">Title</h5>
        <Badge>Badge</Badge>
        <p class="uk-margin-remove uk-text-meta">20 Apr 2025</p>
      </article>
    </a>
    <hr />
    <a href="/" class="note-item uk-border-rounded">
      <article>
        <h5 class="uk-text-bold uk-margin-remove">Title</h5>
        <Badge>Badge</Badge>
        <p class="uk-margin-remove uk-text-meta">20 Apr 2025</p>
      </article>
    </a>
  </aside>
</template>

<script setup>
import Button from "@/Components/Button.vue";
import Badge from "@/components/Badge.vue";
import { Plus } from "lucide-vue-next";
</script>

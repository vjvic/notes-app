<template>
  <div class="notes-layout">
    <div class="notes-layout__sidebar">
      <NoteItem />
    </div>

    <div class="notes-layout__content">
      <NoteForm />
    </div>

    <div class="notes-layout__action-panel">
      <Button
        color="default"
        class="uk-width-1-1 uk-margin-small-bottom uk-flex"
      >
        <Archive class="uk-text-meta" />
        <span class="uk-margin-small-left">Archived Note</span>
      </Button>
      <Button color="default" class="uk-width-1-1 uk-flex">
        <Trash class="uk-text-meta" />
        <span class="uk-margin-small-left">Delete Note</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import NoteItem from "@/components/NoteItem.vue";
import Button from "@/components/Button.vue";
import NoteForm from "@/components/NoteForm.vue";
import { Archive, Trash } from "lucide-vue-next";
</script>

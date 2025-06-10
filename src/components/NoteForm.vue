<template>
  <form>
    <fieldset class="uk-fieldset">
      <div class="uk-margin">
        <input
          class="uk-input uk-text-bold uk-text-large uk-border-rounded uk-padding-remove"
          type="text"
          placeholder="Enter a title..."
          aria-label="Input"
        />
      </div>

      <div class="uk-flex uk-flex-middle">
        <div
          class="notes-layout__tag uk-flex uk-flex-middle uk-margin-remove-bottom uk-margin-small-right"
        >
          <span class="uk-margin-small-right"><Tag :size="20" /></span>
          <span>Tags</span>
        </div>
        <input
          class="uk-input uk-text-meta uk-border-rounded"
          type="text"
          placeholder="Add tags seperated by commas (e.g. Work, Planning)"
          aria-label="Input"
        />
      </div>
      <div class="uk-flex uk-flex-middle">
        <div
          class="notes-layout__edited uk-flex uk-flex-middle uk-margin-remove-bottom uk-margin-small-right"
        >
          <span class="uk-margin-small-right"><Clock :size="20" /></span>
          <span> Last Edited</span>
        </div>
        <p class="notes-layout__date uk-margin-remove uk-text-meta">
          Not yet saved.
        </p>
      </div>

      <hr />

      <textarea
        class="uk-textarea uk-height-1-1 uk-border-rounded"
        rows="33"
        placeholder="Start typing your note here..."
        aria-label="Textarea"
      ></textarea>
    </fieldset>

    <hr />

    <Button color="secondary" size="small">Submit</Button>
  </form>
</template>

<script setup lang="ts">
import { Tag, Clock } from "lucide-vue-next";
import Button from "./Button.vue";
</script>

<template>
  <form>
    <fieldset class="uk-fieldset">
      <div class="uk-margin">
        <input
          class="uk-input uk-text-bold uk-text-large uk-border-rounded"
          type="text"
          placeholder="Enter a title..."
          aria-label="Input"
        />
      </div>

      <div class="uk-flex uk-flex-middle">
        <p
          class="notes-layout__tag uk-margin-remove-bottom uk-margin-small-right"
        >
          Tags
        </p>
        <input
          class="uk-input uk-text-meta uk-border-rounded"
          type="text"
          placeholder="Add tags seperated by commas (e.g. Work, Planning)"
          aria-label="Input"
        />
      </div>
      <div class="uk-flex uk-flex-middle">
        <p
          class="notes-layout__edited uk-margin-remove-bottom uk-margin-small-right"
        >
          Last Edited
        </p>
        <p class="notes-layout__date uk-margin-remove uk-text-meta">
          Not yet saved.
        </p>
      </div>

      <hr />

      <textarea
        class="uk-textarea uk-height-1-1 uk-border-rounded"
        rows="30"
        placeholder="Start typing your note here..."
        aria-label="Textarea"
      ></textarea>
    </fieldset>
  </form>
</template>

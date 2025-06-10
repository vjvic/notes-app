<template>
  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img :src="logoUrl" alt="logo" />
    </div>
    <nav>
      <ul>
        <li
          v-for="navItem in navItems"
          :key="navItem.label"
          class="uk-flex uk-flex-between uk-border-rounded"
        >
          <RouterLink
            :to="navItem.path"
            class="uk-flex uk-flex-between uk-flex-1 uk-text-decoration-none"
          >
            <div class="uk-flex uk-flex-middle">
              <component
                :is="navItem.icon"
                class="uk-margin-small-right"
                :size="16"
              />
              <span>{{ navItem.label }}</span>
            </div>
            <ChevronRight class="sidebar__chevron" />
          </RouterLink>
        </li>
      </ul>
      <hr />
      <p class="uk-margin-remove">Tags</p>
      <ul>
        <li
          v-for="dummyTag in dummyTags"
          :key="dummyTag.label"
          class="uk-flex uk-flex-between uk-border-rounded"
        >
          <RouterLink
            :to="dummyTag.path"
            class="uk-flex uk-flex-between uk-flex-1 uk-text-decoration-none"
          >
            <div class="uk-flex uk-flex-middle">
              <component
                class="uk-margin-small-right"
                :is="dummyTag.icon"
                :size="16"
              />
              <span>{{ dummyTag.label }}</span>
            </div>
            <ChevronRight class="sidebar__chevron" />
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import logoUrl from "@/assets/svg/Logo.svg";
import { ChevronRight } from "lucide-vue-next";
import { navItems } from "@/data/navItems";
import { dummyTags } from "@/data/dummyTags";
</script>

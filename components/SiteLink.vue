<script setup lang="ts">
defineProps<{
  href: string
  label: string
}>()
</script>

<template>
  <a
    :href="href"
    :aria-label="label"
    target="_blank"
    class="icon-list-link"
  >
    <slot />
  </a>
</template>

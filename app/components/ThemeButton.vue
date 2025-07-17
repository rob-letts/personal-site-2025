<script setup lang="ts">
const colorMode = useColorMode()

function updateColorModePreference() {
  colorMode.preference = colorMode.value === 'light'
    ? 'dark'
    : 'light'
}
</script>

<template>
  <button
    v-if="!colorMode.unknown"
    id="theme-button"
    class="theme-button"
    aria-label="theme"
    @click="updateColorModePreference"
  >
    <SunIcon v-if="colorMode.preference === 'light'" />
    <MoonIcon v-else />
  </button>
</template>

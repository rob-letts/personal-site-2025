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
    @click="updateColorModePreference"
    id="theme-button"
    class="theme-button"
    aria-label="theme"
  >
    <SunIcon v-if="colorMode.preference === 'light'"  />
    <MoonIcon v-else />
  </button>
</template>

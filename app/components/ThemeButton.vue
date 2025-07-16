<script setup lang="ts">
const colorMode = useColorMode()
const isLightMode = computed(() => colorMode.value === 'light')

function updateColorMode() {
  colorMode.value = isLightMode.value ? 'dark' : 'light'
}
</script>

<template>
  <button
    @click="updateColorMode"
    id="theme-button"
    class="theme-button"
    aria-label="theme"
  >
    <SunIcon v-if="isLightMode" />
    <MoonIcon v-else />
  </button>
</template>

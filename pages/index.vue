<script lang="ts" setup></script>

<template>
  <div class="flex flex-row m-6 items-center">
    <h4 class="font-bold text-lg">pages:</h4>
    <ul>
      <li>
        <nuxt-link to="/test">test</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
li {
  @apply mx-2 px-2 text-blue-700;
}
</style>

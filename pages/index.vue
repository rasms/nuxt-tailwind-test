<template>
  <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
    <h2 class="text-2xl leading-7 font-semibold font-head">
      Welcome to your Nuxt Application <font-awesome-icon icon="fa-solid fa-user-secret" class="text-slate-500" />
    </h2>
    <p class="mt-3 text-gray-600">
      We recommend you take a look at the <NuxtLink to="/imprint" class="button--doc text-green-500 hover:underline">
        Imprint
      </NuxtLink> or <NuxtLink to="/privacy" class="button--doc text-green-500 hover:underline">
        Privacy
      </NuxtLink>, whether you are new or have previous
      experience with the framework.<br>
    </p>
    <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
      To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and
      start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

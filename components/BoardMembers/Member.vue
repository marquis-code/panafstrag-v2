<template>
  <div>
    <nuxt-link to="/" class="flex flex-col bg-gray-900">
      <nuxt-link rel="noopener noreferrer" class="no-underline" to="#"
        aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" class="object-cover object-center w-full h-52 bg-gray-500" :src="member.avatar">
      </nuxt-link>
      <div class="flex flex-col flex-1 p-6">
        <nuxt-link rel="noopener noreferrer" to="#" class="no-underline"
          aria-label="Te nulla oportere reprimique his dolorum"></nuxt-link>
        <nuxt-link rel="noopener noreferrer" to="#"
          class="text-xs tracki uppercase hover:underline no-underline text-violet-400">{{
            member.name }}</nuxt-link>
        <h3 class="flex-1 py-2 text-lg font-semibold">{{ member.bio.length > 100 ? `${member.bio.slice(0,
          100)}...`
          : member.bio }}</h3>
        <div class="flex flex-wrap justify-between pt-3 font-bold underline space-x-2 text-sm text-gray-400">
          <nuxt-link :to="`/board-members/${member._id}`" class="font-bold">Read More</nuxt-link>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      typeof: Object,
      required: true,
      default: () => { }
    }
  }
}
</script>

<style></style>

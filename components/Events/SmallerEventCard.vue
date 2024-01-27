<template>
  <div class="pt-6 pb-4 space-y-2">
    <span class="h-20 w-20 rounded-md bg-black grid place-items-center text-white text-lg text-center">{{formatToDayAndMonth(programme?.startDate)}}</span>
    <!-- <h1 class="text-lg font-bold">{{ programme?.title?.length > 100 ? `${programme?.title.slice(0, 100)}...` :
      programme.title.slice(0, 100) }}</h1> -->
    <h1 class="text-lg font-bold">{{ programme?.title }}</h1>
    <nuxt-link rel="noopener noreferrer" :to="`/programmes/${programme._id}`" class="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
      <span>Read more</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    programme: {
      type: Object,
      required: true,
      default: () => { }
    }
  },
  methods: {
    formatToDayAndMonth(dateString) {
      const options = { month: 'short', day: 'numeric' };
      const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
      return formattedDate;
    }
  }
}
</script>

<style></style>

<template>
  <div
    class="flex flex-col bg-[url(@/assets/images/events.jpg)] bg-cover bg-top bg-no-repeat justify-center col-span-12 align-middle dark:bg-gray-50 dark:text-gray-700 lg:col-span-6 lg:h-auto">
    <div class="flex flex-col items-center p-8 py-12 text-center">
      <span class="text-white">{{ formatDate(shuffledProgrammes[0].startDate) }}</span>
      <h1 class="py-4 text-xl font-bold text-white">{{ shuffledProgrammes[0]?.title.length > 100 ?
        `${shuffledProgrammes[0]?.title.slice(0, 100)}...` : shuffledProgrammes[0]?.title }}</h1>
      <nuxt-link rel="noopener noreferrer" :to="`/programmes/${shuffledProgrammes[0]?._id}`"
        class="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
        <span>Read more</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import community_programmes from '@/database/programmes.json'
export default {
  data() {
    return {
      shuffledProgrammes: this.sortByLatestStartDate(community_programmes)
    }
  },
  methods: {
    formatDate(inputDate) {
      const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      };

      const formattedDate = new Date(inputDate).toLocaleString('en-US', options);

      return formattedDate;
    },
    sortByLatestStartDate(programs) {
      if (!Array.isArray(programs) || programs.length === 0) {
        return [];
      }
      const sortedPrograms = programs.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

      return sortedPrograms;
    },
  }
}
</script>

<style></style>

<template>
  <div class="p-12 md:w-1/2 flex flex-col items-start">
    <span
      class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">PENDING</span>
    <h2 class="md:text-3xl text-xl title-font font-medium text-gray-900 mt-4 mb-4"> {{
      program.title && program.title.length > 100
      ? program.title.slice(0, 100) + "..."
      : program.title
    }}</h2>
    <p class="leading-relaxed mb-8">{{
      program.theme === "null"
      ? ""
      : program.theme && program.theme.length > 100
        ? program.theme.slice(0, 100).toLowerCase() + "..."
        : program.theme.toLowerCase()
    }}</p>
    <div class="flex items-center  justify-between  border-b-2 w-full pb-3">
      <div class="w-6/12">
        <nuxt-link :to="'/programmes/' + program._id" class="text-indigo-500 inline-flex items-center">Learn More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </nuxt-link>
      </div>
      <div class="items-center flex gap-x-3 w-6/12">
        <span class="text-gray-500 text-sm tracking-widest mt-0.5"> {{ formatToDayAndMonth(program.startDate) ?? 'N/A'
        }}</span>
        to
        <span class="text-gray-500 text-sm tracking-widest mt-0.5"> {{ formatToDayAndMonth(program.endDate) ?? 'N/A'
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    program: {
      default: () => { },
      type: Object,
      required: true
    }
  },
  methods: {
    formatToDayAndMonth(dateString) {
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
      return formattedDate;
    }
  }
}
</script>

<style></style>

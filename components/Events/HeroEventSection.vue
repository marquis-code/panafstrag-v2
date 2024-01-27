<template>
  <div class="dark:bg-gray-50 dark:text-gray-700">
    <div
      class="flex flex-col md:flex-row justify-between md:items-center px-6 space-y-3 md:space-y-0 md:px-10 lg:px-32 py-10">
      <div>
        <h1 class="text-3xl font-serif">Our Events</h1>
        <p>Join UpComing Events Replays & Webinars</p>
      </div>
      <div><nuxt-link to="/programmes" class="py-3 px-6 text-white bg-pink-500 rounded-full">More Events</nuxt-link></div>
    </div>
    <div class="container grid grid-cols-12 mx-auto">
      <LargerEventCard />
      <div class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-700">
        <SmallerEventCard v-for="(item, index) in shuffledProgrammes" :key="index" :programme="item" />
      </div>
    </div>
  </div>
</template>

<script>
import LargerEventCard from '@/components/Events/LargerEventCard.vue'
import SmallerEventCard from '@/components/Events/SmallerEventCard.vue'
import community_programmes from '@/database/programmes.json'
export default {
  components: {
    LargerEventCard, SmallerEventCard
  },
  data() {
    return {
      isOpen: true,
      programmes: community_programmes,
      starting_date: null,
      ending_date: null,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    goBack() {
      this.$router.go(-1);
    },

    timeFrame(program) {
      if (program.status === "pending") {
        let result = this.$moment(program.endDate).format("YYYY");
        return result;
      }
      let startDay = this.$moment(program.startDate)
        .format("YYYY-MMMM-Do")
        .split("-")[2];
      let endDay = this.$moment(program.endDate)
        .format("YYYY-MMMM-Do")
        .split("-")[2];
      let month = this.$moment(program.endDate)
        .format("YYYY-MMMM-Do")
        .split("-")[1];
      let year = this.$moment(program.endDate)
        .format("YYYY-MM-DD")
        .split("-")[0];
      if (startDay === endDay) {
        return `${endDay}, ${month}, ${year}`;
      }
      return `${startDay} to ${endDay}, ${month}, ${year}`;
    },
    sortByLatestStartDate(programs) {
      if (!Array.isArray(programs) || programs?.length === 0) {
        return [];
      }
      const sortedPrograms = programs.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

      return sortedPrograms;
    },
  },
  computed: {
    shuffledProgrammes() {
      return this.sortByLatestStartDate(this.programmes).slice(1, 4)
    }
  }
}
</script>


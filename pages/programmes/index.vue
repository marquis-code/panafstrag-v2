<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div
      class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8"
    >
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          PANAFSTRAG Programmes
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Explore our programmes
        </p>
      </div>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            PANAFSTRAG Programmes
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <!-- <div class="flex flex-wrap -m-12">
        <ActiveProgrammes
          v-for="program in activeProgrammes"
          :key="program._id"
          :program="program"
        />
      </div> -->
      <div class="flex flex-wrap -m-12">
        <PendingProgrammes
          v-for="program in pendingProgrammes"
          :key="program._id"
          :program="program"
        />
      </div>
      <div class="flex flex-wrap -m-12">
        <CompletedProgrammes
          v-for="program in completedProgrammes"
          :key="program._id"
          :program="program"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ActiveProgrammes from "@/components/Programmes/Active.vue";
import PendingProgrammes from "@/components/Programmes/Pending.vue";
import CompletedProgrammes from "@/components/Programmes/Completed.vue";
// import community_programmes from '@/database/programmes.json'
import _ from "lodash";
export default {
  name: "programme",
  scrollToTop: true,
  components: {
    ActiveProgrammes,
    PendingProgrammes,
    CompletedProgrammes,
  },
  data() {
    return {
      isOpen: true,
      programmes: null,
      url: "https://panafstrag.onrender.com/api/panAfrica/programmes",
      starting_date: null,
      ending_date: null,
      title: "Pan Africa programmes and conferences",
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  head() {
    return {
      title: "PANAFSTRAG Programmes",
      meta: [
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image,
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.title,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.image,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.title,
        },
      ],
    };
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
  },
  computed: {
    recentProgrammes() {
      return this.programmes?.filter((p) => {
        this.starting_date = p?.startDate;
        this.ending_date = p?.endDate;
        let endDate = this.$moment(p.endDate)
          .format("YYYY-MM-DD")
          .split("-")[0];
        let currentDate = this.$moment(new Date())
          .format("YYYY-MM-DD")
          .split("-")[0];
        return Number(currentDate) - Number(endDate) <= 2;
      });
    },
    pendingProgrammes() {
      return this.programmes?.filter((p) => {
        return p.status === "pending";
      });
    },
    completedProgrammes() {
      return this.programmes?.filter((p) => {
        return p.status === "completed";
      });
    },
    activeProgrammes() {
      return this.programmes?.filter((p) => {
        return p.status === "active";
      });
    },
  },
  async mounted() {
    try {
      const response = await this.$axios.get("/data/programmes.json");
      this.programmes = response.data;
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  },
};
</script>

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
          Archived Programmes
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Explore Archived programmes
        </p>
      </div>
    </div>
    <div class="bg-white py-24 sm:py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            From the blog
          </h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">
           Learn about Panafstrag Archived programmes since inception
          </p>
        </div>
        <div
          class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <article
            v-for="program in archivedProgrammes"
            :key="program._id"
            class="flex max-w-xl flex-col items-start justify-between"
          >
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-gray-500"
                >{{ formatToDayAndMonth(program.startDate) ?? "N/A" }} to
                {{ formatToDayAndMonth(program.endDate) ?? "N/A" }}</time
              >
              <p
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Archived
              </p>
            </div>
            <div class="group relative">
              <h3
                class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
              >
                <nuxt-link :to="'/programmes/' + program._id">
                  <span class="absolute inset-0"></span>
                  {{
                    program.title && program.title.length > 100
                      ? program.title.slice(0, 100) + "..."
                      : program.title
                  }}
                </nuxt-link>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {{
                  program.theme === "null"
                    ? ""
                    : program.theme && program.theme.length > 100
                    ? program.theme.slice(0, 100).toLowerCase() + "..."
                    : program.theme.toLowerCase()
                }}
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <nuxt-link
                :to="'/programmes/' + program._id"
                class="text-indigo-500 inline-flex items-center italic"
                >Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
              <!-- <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Michael Foster
                  </a>
                </p>
                <p class="text-gray-600">Co-Founder / CTO</p>
              </div> -->
            </div>
          </article>

          <!-- More posts... -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArchivedProgrammes from "@/components/Programmes/Archived.vue";
// import community_programmes from "@/database/programmes.json";
import _ from "lodash";
export default {
  name: "programme",
  scrollToTop: true,
  components: {
    ArchivedProgrammes,
  },
  data() {
    return {
      isOpen: true,
      programmes: null,
      starting_date: null,
      ending_date: null,
      title: "Pan Africa Archives",
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  head() {
    return {
      title: "PANAFSTRAG Archives",
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
      let startDay = this.$moment(program.startDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let endDay = this.$moment(program.endDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let year = this.$moment(program.endDate)
        .format("YYYY-MM-DD")
        .split("-")[0];
      return `${startDay} to ${endDay}, ${year}`;
    },
    formatToDayAndMonth(dateString) {
      const options = { weekday: "short", month: "short", day: "numeric" };
      const formattedDate = new Date(dateString).toLocaleDateString(
        "en-US",
        options
      );
      return formattedDate;
    },
  },
  computed: {
    archivedProgrammes() {
      return this.programmes.filter((p) => {
        this.starting_date = p.startDate;
        this.ending_date = p.endDate;
        let endDate = this.$moment(p.endDate)
          .format("YYYY-MM-DD")
          .split("-")[0];
        let currentDate = this.$moment(new Date())
          .format("YYYY-MM-DD")
          .split("-")[0];
        return Number(currentDate) - Number(endDate) >= 2;
      });
    },
  },
  async mounted() {
    try {
      const response = await this.$axios.get("/data/programmes.json");
      this.programmes = response.data
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  },
};
</script>

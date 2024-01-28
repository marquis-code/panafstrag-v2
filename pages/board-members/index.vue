<template>
  <section class="text-gray-600 body-font">
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
          Board Members
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          We’re a dynamic group of individuals who are passionate about what we
          do.
        </p>
      </div>
    </div>

    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4" v-if="!loading">
        <div
          class="p-4 lg:w-1/2"
          v-for="member in boardMembers"
          :key="member._id"
        >
          <nuxt-link
            :to="'/board-members/' + member._id"
            class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
          >
            <img
              alt="team"
              class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              :src="member.avatar"
            />
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg text-gray-900">
                {{ member.name }}
              </h2>
              <h3
                class="text-gray-500 mb-3"
                v-for="eachEmail in member.email"
                :key="eachEmail"
              >
                <span
                  class="mr-2 text-xs"
                  v-for="userEmail in eachEmail.split(',')"
                  :key="userEmail"
                  >{{ userEmail === "null" ? null : userEmail }}</span
                >
              </h3>
              <p class="mb-4">
                {{
                  member?.bio.length > 100
                    ? `${member?.bio.slice(0, 100)}...`
                    : member?.bio.length
                }}
              </p>
              <span class="inline-flex">
                <nuxt-link
                  :to="'/board-members/' + member._id"
                  class="text-gray-500 underline font-bold"
                >
                  Find out more
                </nuxt-link>
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
      <section
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        v-if="loading && $nuxt.isOnline"
      >
        <div v-for="i in 3" :key="i">
          <article
            class="overflow-hidden rounded-md shadow-md dark:border-gray-800 dark:shadow-gray-700/25 p-4 w-full mx-auto"
          >
            <div class="animate-pulse flex flex-col space-x-4">
              <div
                class="bg-slate-400 h-40 w-full px-0 mx-0 rounded-tr-md rounded-tl-md"
              ></div>

              <div class="flex-1 space-y-3 py-3">
                <div
                  class="h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"
                ></div>
                <div
                  class="h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"
                ></div>
                <div
                  class="h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"
                ></div>
                <div
                  class="h-3 w-1/4 pl-0 -ml-4 bg-slate-400 rounded-full"
                ></div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>


<script>
export default {
  name: "board-members",
  scrollToTop: true,
  data() {
    return {
      boardMembers: [],
      loading: true,
      title: "Pan Africa Board Members",
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  head() {
    return {
      title: "PANAFSTRAG Board Member",
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
  created() {
    // this.getBoardMembers();
  },
  methods: {
    // async getBoardMembers() {
    //   try {
    //     let res = await this.$axios.get(
    //       "https://panafstrag.onrender.com/api/panAfrica/board-member"
    //     );
    //     this.boardMembers = res.data;
    //     this.loading = false;
    //   } catch (error) {
    //     this.$toast
    //       .error("Something went wrong, please try again.")
    //       .goAway(1500);
    //   } finally {
    //     this.loading = false;
    //   }
    // },
    goBack() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    try {
      const response = await this.$axios.get("/data/board-members.json");
      this.boardMembers = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
<style scoped>
.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-leave-to {
  transform: scale(0.8);
}
</style>

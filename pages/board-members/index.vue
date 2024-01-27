<template>
  <section class="text-gray-600 body-font">
    <section
      class="overflow-hidden bg-[url('~/assets/images/board.jpeg')] bg-cover bg-top bg-no-repeat">
      <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="text-center ltr:sm:text-left rtl:sm:text-right">
          <div class="flex flex-wrap w-full mb-20 justify-center items-center flex-col">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center items-center flex-col gap-y-3">
              <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-white">OUR BOARD MEMBERS</h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4" v-if="!loading">
        <div class="p-4 lg:w-1/2" v-for="member in boardMembers" :key="member._id">
          <nuxt-link :to="'/board-members/' + member._id"
            class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              :src="member.avatar">
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg text-gray-900"> {{ member.name }}</h2>
              <h3 class="text-gray-500 mb-3" v-for="eachEmail in member.email" :key="eachEmail">
                <span class="mr-2 text-xs" v-for="userEmail in eachEmail.split(',')" :key="userEmail">{{ userEmail ===
                  "null" ? null : userEmail }}</span>
              </h3>
              <p class="mb-4">{{ member?.bio.length > 100 ? `${member?.bio.slice(0, 100)}...` : member?.bio.length }}</p>
              <span class="inline-flex">
                <nuxt-link :to="'/board-members/' + member._id" class="text-gray-500 underline font-bold">
                  Find out more
                </nuxt-link>
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" v-if="loading && $nuxt.isOnline">
        <div v-for="i in 3" :key="i">
          <article
            class="overflow-hidden rounded-md shadow-md dark:border-gray-800 dark:shadow-gray-700/25 p-4 w-full mx-auto">
            <div class="animate-pulse flex flex-col space-x-4">
              <div class="bg-slate-400 h-40 w-full px-0 mx-0 rounded-tr-md rounded-tl-md"></div>

              <div class="flex-1 space-y-3 py-3">
                <div class="h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"></div>
                <div class="h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"></div>
                <div class="h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"></div>
                <div class="h-3 w-1/4 pl-0 -ml-4 bg-slate-400 rounded-full"></div>
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
      title: 'PANAFSTRAG Board Member',
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
    this.getBoardMembers();
  },
  methods: {
    async getBoardMembers() {
      try {
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/board-member"
        );
        this.boardMembers = res.data;
        this.loading = false;
      } catch (error) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
      } finally {
        this.loading = false;
      }
    },
    goBack() {
      this.$router.go(-1);
    },
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
